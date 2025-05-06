import { NextFunction, Request, Response } from "express";
import { prisma } from "../config/db";
import bcrypt from "bcrypt";
import { UsuarioSchema } from "../schemas/schemas";
import { AppError } from "../utils/appError";
import { gerarToken } from "../utils/gerarToken";

export class UsuarioController {
  async cadastroUsuario(req: Request, res: Response, next: NextFunction){
    try{
      const parsedUsuario = UsuarioSchema.parse(req.body)
      const senhaHashed = await bcrypt.hash(parsedUsuario.senha, 10)

      const NovoUsuario = await prisma.usuario.create({
        data: {
          ...parsedUsuario,
          senha: senhaHashed
        }
      })

      res.status(201).send({message: "Cadastro realizado!", usuarioID: NovoUsuario.id, usuarioTipo: NovoUsuario.tipo})

    }catch (error) {
      next(error)
    }
  };
  async loginUsuario(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, senha } = req.body;

      const usuario = await prisma.usuario.findUnique({
        where: { email },
        include: {
          cliente: true,
          feirante: true,
        },
      });

      if (!usuario) {
        throw new AppError("Usuário não encontrado!", 404)
      }

      const senhaValida = await bcrypt.compare(senha, usuario.senha);

      if (!senhaValida) {
        throw new AppError("Senha Incorreta!", 401)
      }

      if (!usuario.cliente && !usuario.feirante) {
        throw new AppError("Tipo de usuário não identificado", 400);
      };
      
      const token = gerarToken({ id: usuario.id, tipo: usuario.tipo })

      if (usuario.cliente) {
        res.status(200).json({
          message: "Login realizado com sucesso!",
          tipo: "CLIENTE",
          id: usuario.cliente.id,
          token
        });
        return;
      };
      
      if (usuario.feirante) {
        res.status(200).json({
          message: "Login realizado com sucesso!",
          tipo: "FEIRANTE",
          id: usuario.feirante.id,
          token
        });
        return;
      };

    } catch (error) {
        next(error)
    }
  };
  async listarUsuarios(req: Request, res: Response, next: NextFunction){
    try {

      const Usuarios = await prisma.usuario.findMany();

      res.status(200).json(Usuarios);

    } catch(error){
      next(error)
    };
  };
}
