import { NextFunction, Request, Response } from "express";
import { prisma } from "../config/db";
import { AppError } from "../utils/appError";
import { string } from "zod";
import { calcularMedia } from "../utils/calcularNotas";

export class BancoController {
  async MostrarLocalizacoes(req: Request, res: Response, next: NextFunction) {
    try{
      const CoordenadasBancos = await prisma.banco.findMany({
        select: {
          nomeMarca: true,
          endereco: {
            select: {
              longitude: true,
              latitude: true
            }
          }
        }
      });

      if(!CoordenadasBancos){
        throw new AppError("Erro na busca das Coordenadas dos Bancos!", 404)
      }

      res.status(200).json({CoordenadasBancos});
    }catch(error){
      next(error)
    };
  };

  async MostrarInfoBanco(req: Request, res: Response, next: NextFunction) {
    try{

      const { id } = req.params;

      const BancoInfo = await prisma.banco.findUnique({
        where: { id },
        select: {
          nomeMarca: true,
          foto: true,
          tipoProdutos: true,
          horario: true,
          descricao: true,

          endereco: {
            select: {
              rua: true,
              setor: true,
              numero: true,
              longitude: true,
              latitude: true
            }
          },

          feirante: {
            select: {
              linkWhatsapp: true,
              linkFacebook: true,
              linkInstagram: true
            }
          },

          avaliacoes: {
            select: {
              nota: true,
              comentario: true
            }
          }
        }
      });

      if(!BancoInfo){
        throw new AppError("Banco não encontrado", 404)
      }

      const mediaNotas = calcularMedia(BancoInfo.avaliacoes)

      res.status(200).json({
        ...BancoInfo,
        mediaNotas: mediaNotas.toFixed(2)
      });

    }catch(error){
      next(error)
    };
  };
  
  async FiltrarBanco(req: Request, res: Response, next: NextFunction) {
    try{

      const { nomeMarca, tipos, endereco, avaliacaoMinima } = req.query;

      const filtros: any = {};

      if(nomeMarca){
        filtros.nomeMarca = { contains: String(nomeMarca), mode: "insensitive" } 
      };

      if(tipos){
        const tiposArray = String(tipos).split(",").map((tipo) => tipo.trim().toUpperCase());
        filtros.tipoProdutos = {
          hasSome: tiposArray
        }
      };

      if(endereco){
        filtros.endereco = {
          OR: [
            { rua: { contains: String(endereco), mode: "insensitive" } },
            { setor: { contains: String(endereco), mode: "insensitive" } },
            { numero: { contains: String(endereco), mode: "insensitive" } }
          ]
        }
      };

      const bancos = await prisma.banco.findMany({
        where: filtros,
        select: {
          nomeMarca: true,
          endereco: {
            select: {
              rua: true,
              setor: true,
              numero: true,
              longitude: true,
              latitude: true
            }
          },
          avaliacoes: {
            select: {
              nota: true
            }
          }
        }
      });

      const bancosComNotas = bancos.map((banco) => {
        const media = calcularMedia(banco.avaliacoes);
        return {
          ...banco,
          media: media
        }
      });

      const bancosFiltrados = bancosComNotas.filter(
        (banco) => banco.media >= (Number(avaliacaoMinima || 0))
      );

      const resultado = bancosFiltrados.map((banco) => ({
        nomeMarca: banco.nomeMarca,
        endereco: banco.endereco,
        media: banco.media,
      }));

      res.status(200).json(resultado)
      
    }catch(error){
      next(error)
    }
  };

}
