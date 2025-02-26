const { verify } = require('jsonwebtoken')
const authConfig = require('../config/auth.js')

function ensureAuthenticate(req, res, next) {
  const authHeader = req.headers.authorization

  if(!authHeader) {
    return res.status(401).json({ error: 'JWT token não informado' })
  }

  const [, token] = authHeader.split(' ')

  try {
    const { sub: user_id } = verify(token, authConfig.jwt.secret)

    req.user = {
      id: Number(user_id)
    }

    return next()
  } catch (error) {
    return res.status(401).json({ error: 'JWT token não informado' })
  }
}

module.exports = ensureAuthenticate