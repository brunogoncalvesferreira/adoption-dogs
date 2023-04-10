const sqlite3 = require("sqlite3")
const db = new sqlite3.Database("./src/database/database.db")

db.serialize(() => {
  // create table
  // db.run(`CREATE TABLE IF NOT EXISTS dogs (
  //   id INTEGER PRIMARY KEY AUTOINCREMENT,
  //   name TEXT,
  //   age TEXT,
  //   phone TEXT,
  //   photo TEXT
  // )`)
  // insert values table
  // const query = `
  //   INSERT INTO dogs(
  //   name,
  //   age,
  //   phone,
  //   photo
  //  ) VALUES( ?, ?, ?, ?)
  // `
  // const values = [
  //   "Princesa",
  //   "1 ano",
  //   "5532998139420",
  //   "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  // ]
  // function insertDogsTable(error) {
  //   if (error) {
  //     console.log("Erro:", error)
  //   }
  //   console.log("Cãozinho cadastrado com sucesso...")
  // }
  // db.run(query, values, insertDogsTable)
  // consult table
  db.all(`SELECT * FROM dogs`, function (error, rows) {
    if (error) {
      console.log("Erro:", error)
    }
    console.log("Lista de cãozinhos:", rows)
  })
  // delete dados
  db.run(`DELETE FROM dogs WHERE id=?`, [2], function (error) {
    if (error) {
      console.log("Erro:", error)
    }
    console.log("Cãozinho deletado com sucesso...")
  })
})

module.exports = db
