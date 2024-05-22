import express from 'express'
import { routes } from './routes/routes.js'

const app = express()
app.use(express.urlencoded({ extended: true }))

app.use(express.static("public"))
app.use(express.json())
app.use(routes)

app.set("view engine", "ejs")
app.set("views", "./src/views/pages")

app.listen(8080, () => console.log("Servidor iniciado..."))

