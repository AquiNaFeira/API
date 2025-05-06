import { Router } from "express";
import { BancoController } from "../controllers/bancoController"

const bancoRoutes = Router()
const bancoController = new BancoController

bancoRoutes.get("/localizacoes", bancoController.MostrarLocalizacoes) 

bancoRoutes.get("/info-banco/:id", bancoController.MostrarInfoBanco)

bancoRoutes.get("/filtro", bancoController.FiltrarBanco)


export { bancoRoutes }