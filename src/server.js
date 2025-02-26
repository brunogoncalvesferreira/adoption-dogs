const express = require("express")
const cors = require("cors")
const routes = require("./routes/routes.js")

const app = express()
app.use(cors())
app.use(express.json())

app.use(routes)

app.listen(8080, () => console.log("Servidor iniciado..."))

