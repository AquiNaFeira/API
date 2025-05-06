import { Request, Response, NextFunction } from "express";
import { prisma } from "../config/db";
import { FavoritoSchema } from "../schemas/schemas";

export class FavoritosController{
    async FavoritarBanco(req: Request, res: Response, next: NextFunction){
        try{
            const parsedFavorito = FavoritoSchema.parse(req.body);

            const favorito = await prisma.favorito.create({
                data: {
                    ...parsedFavorito
                }
            });

            res.status(201).json({ message: "Banco favoritado com sucesso!", favorito });
        }catch(error){
            next(error)
        };
    };

    async DeletarBancoFavorito(req: Request, res: Response, next: NextFunction){
        try{
            const { clienteId, bancoId } = FavoritoSchema.parse(req.body);

            await prisma.favorito.delete({
                where: {
                    clienteId_bancoId: {
                        clienteId,
                        bancoId
                    }
                }
            });

            res.status(201).json({ message: "Banco favoritado deletado com sucesso!" });
        }catch(error){
            next(error)
        }
    };

    async ListarFavoritos(req: Request, res: Response, next: NextFunction){
        try{

            const { clienteId } = req.params;

            const Favoritos = await prisma.favorito.findMany({
                where: {
                    clienteId
                },
                include: {
                    banco: {
                        select: {
                            nomeMarca: true,
                            foto: true,
                            tipoProdutos: true,
                            endereco: {
                                select: {
                                    rua: true,
                                    setor: true,
                                    numero: true
                                }
                            }
                        }
                    }
                }
            });

            const BancosFavoritos = Favoritos.map(fav => fav.banco);

            res.status(201).json({BancosFavoritos});

        }catch(error){
            next(error)
        };
    };
}