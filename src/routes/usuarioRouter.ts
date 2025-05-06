import { Router } from "express";
import { UsuarioController } from "../controllers/usuarioController"

const usuarioRoutes = Router()
const usarioController = new UsuarioController


usuarioRoutes.post("/registro", usarioController.cadastroUsuario)
usuarioRoutes.post("/login", usarioController.loginUsuario)
usuarioRoutes.get("/lista-usuarios", usarioController.listarUsuarios)


export { usuarioRoutes }