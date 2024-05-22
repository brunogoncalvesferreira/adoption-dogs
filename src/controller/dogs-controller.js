import { db } from "../database/db.js";

export class DogsController {
  async create (req, res) {
    try {
      const { name, age, phone, photo } = req.body

      const query = 'insert into dogs (name, age, phone, photo) values (?, ?, ?, ?)'
      const values = [name, age, phone, photo]

      function insertDogsTable(error) {
        if (error) {
          console.log("Erro:", error)
        }
        console.log("Cãozinho cadastrado com sucesso...")
        res.render("saveDog", { saved: true })
      }

      db.run(query, values, insertDogsTable)

      return res.status(201)
    } catch (error) {
      
    }
  }

  async list (req, res) {
    db.all('select * from dogs', (error, rows) => {
      if(error) {
        return console.log("Erro:", error)
      } else {
        return res.render("toAdopt", { dogs: rows })
      }
    })
  }

  async update(req, res) {}

  async delete(req, res) {}
}