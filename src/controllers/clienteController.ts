
import { NextFunction, Request, Response } from "express";
import { prisma } from "../config/db";
import { ClienteSchema } from "../schemas/schemas";
import { AppError } from "../utils/appError";
import { gerarToken } from "../utils/gerarToken";


export class ClienteController {

  async CadastrarCliente(req: Request, res: Response, next: NextFunction) {
    try{

      const parsedCliente = ClienteSchema.parse(req.body);

      const NovoCliente = await prisma.cliente.create({
        data:{
          ...parsedCliente
        }
      });

      const token = gerarToken({id: NovoCliente.usuarioId, tipo: "CLIENTE"})
 
      res.status(201).send({
        message: "Cadastro realizado!", 
        cliente: NovoCliente, 
        token
      });

    } catch (error){
      next(error);
    }
  };

  async AtualizarCliente(req: Request, res: Response, next: NextFunction){

    const usuarioLogado = req.usuario!;
      
    if (usuarioLogado.tipo !== "CLIENTE" || usuarioLogado.id !== req.params.id) {
      throw new AppError("Acesso negado", 403);
    }

    try {

      const parsedCliente = ClienteSchema.partial().parse(req.body);
      const clienteAtualizado = await prisma.cliente.update({
        where: { usuarioId: usuarioLogado.id },
        data: {
          ...(parsedCliente.nome && { nome: parsedCliente.nome }),
          ...(parsedCliente.cpf && { cpf: parsedCliente.cpf }),
          ...(parsedCliente.dataNascimento && {
            dataNascimento: parsedCliente.dataNascimento
          }),
          ...(parsedCliente.genero && { genero: parsedCliente.genero }),
          ...(parsedCliente.telefone && { telefone: parsedCliente.telefone }),
          ...(parsedCliente.interesses && { interesses: { set: parsedCliente.interesses } }),
        },
      });

      if(!clienteAtualizado){
        throw new AppError("Cliente não encontrado!", 404)
      }
       
      res.status(200).json({message: "Cliente atualizado com sucesso!", cliente: parsedCliente });
    
    } catch (error) {
      next(error)
    }
  };
  
  async DeletarCliente(req: Request, res: Response, next: NextFunction) {

    const usuarioLogado = req.usuario!;

    if (usuarioLogado.tipo !== "CLIENTE" || usuarioLogado.id !== req.params.id) {
      throw new AppError("Acesso negado", 403);
    }
    
    try {

      const cliente = await prisma.cliente.findUnique({
        where: { usuarioId: usuarioLogado.id}
      });

      if(!cliente){
        throw new AppError("Cliente não encontrado!" , 404)
      };

      await prisma.favorito.deleteMany({
        where: { clienteId: cliente.id }
      });

      await prisma.avaliacao.deleteMany({
        where: { clienteId: cliente.id }
      })

      await prisma.cliente.delete({
        where: { usuarioId: usuarioLogado.id }
      });

      await prisma.usuario.delete({
        where: { id : usuarioLogado.id }
      });

      res.status(200).json({message: "Cliente deletado com sucesso!"});

    } catch (error) {
      next(error)
    }
  };

  async ListarClientes(req: Request, res: Response, next: NextFunction) {
    try {

      const Clientes = await prisma.cliente.findMany(
        {
          select: {
            id: true,
            nome: true
          }
        }
      );

      res.status(200).json(Clientes);

    } catch(error){
      next(error)
    };

  };

  async BuscarClienteID(req: Request, res: Response, next: NextFunction) {
    
    const usuarioLogado = req.usuario!;

    if (usuarioLogado.tipo !== "CLIENTE" || usuarioLogado.id !== req.params.id) {
      throw new AppError("Acesso negado", 403);
    }
    
    try {

      const clienteBuscado = await prisma.cliente.findUnique({
        where: { usuarioId: usuarioLogado.id },
        select: {
          id: true,
          nome: true,
          cpf: true,
          favoritos: true
        }
      });
       
      if(!clienteBuscado){
        throw new AppError("Cliente não encontrado!")
      };

      res.status(200).json(clienteBuscado);
    
    } catch(error){
      next(error)
    };

  };
}
