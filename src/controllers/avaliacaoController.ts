import { NextFunction, Request, Response } from "express";
import { prisma } from "../config/db";
import { AvaliacaoSchema } from "../schemas/schemas";

export class AvaliacaoController{
    async AvaliacaoBanco(req: Request, res: Response, next: NextFunction){
        try{
            const parsedAvaliacao = AvaliacaoSchema.parse(req.body);

            const avaliacao = await prisma.avaliacao.create({
                data: {
                    ...parsedAvaliacao
                }
            });

            res.status(201).json({ message: "Avaliação feita!", avaliacao });
        }catch(error){
            next(error)
        };
    };

    async MostrarAvaliacaos(req: Request, res: Response, next: NextFunction){
        try{
            const { bancoId } = req.params
            const bancoAvaliacoes = await prisma.banco.findMany({
                where: { id: bancoId },
                select: {
                    avaliacoes: {
                        select: {
                            nota: true,
                            comentario: true
                        }
                    }
                }
            });

            res.status(200).json({bancoAvaliacoes})
        }catch(error){
            next(error)
        }
    };
}