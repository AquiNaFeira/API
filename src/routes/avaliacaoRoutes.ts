import { Router } from "express"; 
import { AvaliacaoController } from "../controllers/avaliacaoController";
import { verificarToken } from "../middlewares/verificarToken";

const avaliacaoRoutes = Router()
const avaliacaoController = new AvaliacaoController

avaliacaoRoutes.use(verificarToken)

avaliacaoRoutes.post("/avaliar-banco", avaliacaoController.AvaliacaoBanco)
avaliacaoRoutes.get("/mostrar-avaliacoes/:id", avaliacaoController.MostrarAvaliacaos)

export { avaliacaoRoutes }