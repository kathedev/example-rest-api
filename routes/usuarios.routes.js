import { Router } from 'express'
import fs from 'fs' // file system
import path from 'path'

const usuarioFile = path.join(process.cwd(), "data", "usuarios.json")
const router = Router()

//req:peticion res:respuesta//
router.get("/", (req, res)=> {
    const usuarios = readFile()
    res.json(usuarios)
})

router.post("/", (req, res)=> {
    const usuario = req.body
    saveFile(usuario)
    res.json("el usuario a sido guardado")
})

function readFile(){
    const result = fs.readFileSync(usuarioFile, "utf-8")
    const json = JSON.parse(result)
    return json
}

function saveFile(usuario){
    const contenidoActual = readFile()
    const todosLosIds = contenidoActual.map((user)=> user.id)
    const nuevoId = Math.max(...todosLosIds, 0) + 1

    const nuevoUsuario = { ...usuario, id: nuevoId}

    const contenidoNuevo = [...contenidoActual, nuevoUsuario]
    fs.writeFileSync(usuarioFile, JSON.stringify(contenidoNuevo), null, 2)
}

export default router