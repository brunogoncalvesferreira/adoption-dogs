const db = require('../database/db.js')
const { sign } = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const authConfig = require('../config/auth.js')

class SessionsController {
  async create(req, res) {
    try {
      const { email, password } = req.body

    const users = await new Promise((resolve, reject) => {
      db.all('select * from users where email = ?', [email], (err, rows) => {
        if (err) {
          reject(err)
        } else {
          resolve(rows)
        }
      })
    })

    if (users.length === 0) {
      return res.status(401).json({ error: 'E-mail ou senha inválida' })
    }

    const user = users[0]

    const passwordMatched = await bcrypt.compare(password, user.password)

    if (!passwordMatched) {
      return res.status(401).json({ error: 'E-mail ou senha inválida' })
    }

    const { secret, expiresIn } = authConfig.jwt

    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn
    })

    return res.json({ user, token })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }
}

module.exports = SessionsController