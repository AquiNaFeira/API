import { Router } from "express";
import { ClienteController } from "../controllers/clienteController"
import { verificarToken } from "../middlewares/verificarToken";

const clienteRoutes = Router()
const clienteController = new ClienteController

clienteRoutes.get("/lista-clientes", clienteController.ListarClientes)

clienteRoutes.post("/cadastro", clienteController.CadastrarCliente)

clienteRoutes.use(verificarToken)

clienteRoutes.get("/meu-perfil/:id", clienteController.BuscarClienteID) 

clienteRoutes.patch("/atualizar-cliente/:id", clienteController.AtualizarCliente)

clienteRoutes.delete("/deletar-cliente/:id", clienteController.DeletarCliente)

export { clienteRoutes }