const bcrypt = require("bcrypt");
const db = require("../database/db.js");

class UserController {
  async create(req, res) {
    try {
      const { name, email, password } = req.body;

      const checkUserExists = await new Promise((resolve, reject) => {
        db.all('select * from users where email = ?', [email], (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        });
      });

      if (checkUserExists.length > 0) {
        return res.status(400).json({ error: "Usuário já existe!" });
      }

      const hashPassword = await bcrypt.hash(password, 8);

      const query = 'insert into users (name, email, password) values (?, ?, ?)';
      const values = [name, email, hashPassword];

      await new Promise((resolve, reject) => {
        db.run(query, values, function (error) {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        });
      });

      return res.status(201).json({ message: "Usuário criado com sucesso!" });
      
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async update() {}
}

module.exports = UserController