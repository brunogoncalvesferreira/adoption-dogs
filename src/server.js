const express = require("express")

const app = express()

const db = require("./database/db")

app.use(express.urlencoded({ extended: true }))

app.use(express.static("public"))

app.set("view engine", "ejs")
app.set("views", "./src/views/pages")

app.get("/", (req, res) => {
  req.query
  res.render("index")
})

app.get("/sobre", (req, res) => {
  res.render("about")
})

app.get("/doacao", (req, res) => {
  res.render("donation")
})

// app.get("/salvo", (req, res) => res.render("saveDog"))

app.post("/salvo", (req, res) => {
  // create table
  db.run(`CREATE TABLE IF NOT EXISTS dogs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    age TEXT,
    phone TEXT,
    photo TEXT
  )`)

  // insert values table
  const query = `
    INSERT INTO dogs(
    name,
    age,
    phone,
    photo
   ) VALUES( ?, ?, ?, ?)
  `
  const values = [req.body.name, req.body.age, req.body.phone, req.body.photo]
  function insertDogsTable(error) {
    if (error) {
      console.log("Erro:", error)
    }
    console.log("Cãozinho cadastrado com sucesso...")
    res.render("saveDog", { saved: true })
  }
  db.run(query, values, insertDogsTable)
})

app.get("/adotar", (req, res) => {
  db.all(`SELECT * FROM dogs`, (error, rows) => {
    if (error) {
      console.log("Erro:", error)
    }
    console.log("Lista de cãozinhos:", rows)
    res.render("toAdopt", { dogs: rows })
  })
})

app.listen(3000)
console.log("Servidor rodando na port 3000...")
