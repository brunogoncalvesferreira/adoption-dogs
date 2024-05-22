import sqlite3 from "sqlite3"
export const db = new sqlite3.Database("./src/database/database.db")

db.serialize(() => {
   db.run(`create table if not exists dogs (
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     name TEXT,
     age TEXT,
     phone TEXT,
     photo TEXT
   )`)
})