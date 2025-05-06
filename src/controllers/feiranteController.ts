import { Request, Response, NextFunction } from "express";
import { FeiranteSchema, BancoSchema } from "../schemas/schemas"
import { prisma } from "../config/db";
import { AppError } from "../utils/appError";
import { gerarToken } from "../utils/gerarToken";

export class FeiranteController {
  //Não precisa de verificação de token
  async CriarFeirante(req: Request, res: Response, next: NextFunction) {
    try{

      const parsedFeirante = FeiranteSchema.parse(req.body);

      for (const banco of parsedFeirante.bancos){
        BancoSchema.parse(banco)
      };
  
      const NovoFeirante = await prisma.feirante.create({
        data: {
          ...parsedFeirante,
          bancos: {
            create: parsedFeirante.bancos.map((banco) => ({
              ...banco,
              endereco: {
                create: {
                  ...banco.endereco
                }
              }
            }))
          }
        },
        include: { bancos: true }
      });

      const token = gerarToken({id: NovoFeirante.usuarioId, tipo: "FEIRANTE"})

      res.status(201).json({
        message: "Cadastro do Feirante realizado com sucesso!", 
        feirante: NovoFeirante, 
        token
      })
    }catch(error){
     next(error)
    }
  };
  //Precisa de verificação de token
  async AtualizarFeirante(req: Request, res: Response, next: NextFunction) {

    const usuarioLogado = req.usuario!;
      
    if (usuarioLogado.tipo !== "FEIRANTE" || usuarioLogado.id !== req.params.id) {
      throw new AppError("Acesso negado", 403);
    }
    
    try {

      const parsedFeirante = FeiranteSchema.partial().parse(req.body);

      const FeiranteAtualizado = await prisma.feirante.update({
        where: { usuarioId: usuarioLogado.id },
        data: {
          ...(parsedFeirante.nomeProprietario && { nomeProprietario: parsedFeirante.nomeProprietario }),
          ...(parsedFeirante.cpfCnpj && { cpfCnpj: parsedFeirante.cpfCnpj }),
          ...(parsedFeirante.cadastroAssosiacao && { cadastroAssosiacao: parsedFeirante.cadastroAssosiacao }),
          ...(parsedFeirante.telefone && { telefone: parsedFeirante.telefone }),
          ...(parsedFeirante.linkWhatsapp && { linkWhatsapp: parsedFeirante.linkWhatsapp }),
          ...(parsedFeirante.linkFacebook && { linkWhatsapp: parsedFeirante.linkFacebook }),
          ...(parsedFeirante.linkInstagram && { linkWhatsapp: parsedFeirante.linkInstagram })
        },
      });
        
      res.status(200).json({message: "Feirante atualizado com sucesso!", cliente: parsedFeirante });
    
    } catch (error) {
      next(error)
    }
  };

  async DeletarFeirante(req: Request, res: Response, next: NextFunction) {

    const usuarioLogado = req.usuario!;
      
    if (usuarioLogado.tipo !== "FEIRANTE" || usuarioLogado.id !== req.params.id) {
      throw new AppError("Acesso negado", 403);
    }
    
    try {

      const feirante = await prisma.feirante.findUnique({
        where: { usuarioId: usuarioLogado.id}
      });

      if(!feirante){
        throw new AppError("Feirante não encontrado!", 404)
      }

      await prisma.banco.deleteMany({
        where: { feiranteId: feirante.id }
      })

      await prisma.feirante.delete({
        where: { usuarioId: usuarioLogado.id }
      });

      await prisma.usuario.delete({
        where: { id: usuarioLogado.id }
      })

      res.status(200).json({message: "Feirante deletado com sucesso!"});

    } catch (error) {
      next(error)
    }
  };

  async BuscarFeiranteID(req: Request, res: Response, next: NextFunction) {

    const usuarioLogado = req.usuario!;

    if (usuarioLogado.tipo !== "FEIRANTE" || usuarioLogado.id !== req.params.id) {
      throw new AppError("Acesso negado", 403);
    }
        
    try {
      
      const FeiranteBuscado = await prisma.feirante.findUnique({
        where: { usuarioId: usuarioLogado.id },
        select: {
          nomeProprietario: true,
          bancos: {
            select: {
              nomeMarca: true,
              endereco: true
            }
          }
        }
      });
       
      if(!FeiranteBuscado){
        throw new AppError("Feirante não encontrado", 404)
      };

      res.status(200).json(FeiranteBuscado);
    
    } catch(error){
      next(error)
    };
  };
}
