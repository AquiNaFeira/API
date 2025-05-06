import { Router } from "express";

import { FeiranteRoutes } from "./feiranteRoutes";
import { clienteRoutes } from "./clienteRoutes";
import { bancoRoutes } from "./bancoRoutes";
import { usuarioRoutes } from "./usuarioRouter";
import { favoritosRoutes } from "./favoritosRoutes";
import { avaliacaoRoutes } from "./avaliacaoRoutes";

const routes = Router();

routes.use("/feirante", FeiranteRoutes)
routes.use("/cliente", clienteRoutes)
routes.use("/banco", bancoRoutes)
routes.use("/usuario", usuarioRoutes)
routes.use("/favoritos", favoritosRoutes)
routes.use("/avaliacao", avaliacaoRoutes)

export default routes;