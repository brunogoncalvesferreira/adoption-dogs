const sqlite3 = require("sqlite3")
const db = new sqlite3.Database("./src/database/database.db")

db.serialize(() => {
   db.run(`
    create table if not exists dogs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      age TEXT,
      phone TEXT,
      photo TEXT
   )`)

   db.run(`
    create table if not exists users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT,
      password TEXT
   )`)
})

module.exports = db