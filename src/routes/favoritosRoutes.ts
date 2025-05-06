import { Router } from "express";
import { FavoritosController } from "../controllers/favoritosController"
import { verificarToken } from "../middlewares/verificarToken";

const favoritosRoutes = Router()
const favoritosController = new FavoritosController

favoritosRoutes.use(verificarToken)

favoritosRoutes.post("/favoritar-banco", favoritosController.FavoritarBanco)

favoritosRoutes.delete("/deletar-favorito", favoritosController.DeletarBancoFavorito)

favoritosRoutes.get("listar-favoritos/:id", favoritosController.ListarFavoritos)

export { favoritosRoutes }