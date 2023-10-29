import express from 'express'
import { config } from 'dotenv'
config()

import usuariosRoutes from './routes/usuarios.routes.js'

const PORT = process.env. PORT || 3000;

const app = express()
app.use(express.json())

app.use("/api/usuario", usuariosRoutes)

app.listen(PORT, ()=> {
    console.log(":) server is running on http://localhost:" + PORT)
})