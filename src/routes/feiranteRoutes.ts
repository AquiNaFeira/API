import { Router } from "express";
import { FeiranteController } from "../controllers/feiranteController"
import { verificarToken } from "../middlewares/verificarToken";

const FeiranteRoutes = Router()
const feiranteController = new FeiranteController

FeiranteRoutes.post("/cadastro", feiranteController.CriarFeirante)

FeiranteRoutes.use(verificarToken)

FeiranteRoutes.get("/meu-perfil/:id", feiranteController.BuscarFeiranteID) 

FeiranteRoutes.patch("/atualizar-feirante/:id", feiranteController.AtualizarFeirante)

FeiranteRoutes.delete("/deletar-feirante/:id", feiranteController.DeletarFeirante)

export { FeiranteRoutes }