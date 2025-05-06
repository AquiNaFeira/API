import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/appError";

interface TokenPayload {
    id: string;
    tipo: 'CLIENTE' | 'FEIRANTE';
    iat: number;
    exp: number;
}

export const verificarToken = (req: Request, res: Response, next: NextFunction) => {

    const token = req.header('Authorization')?.replace('Bearer ', "");

    if(!token){
        throw new AppError("Token não fornecido", 401);
    };

    try{
        const chavesecreta = process.env.CHAVE_TOKEN as string;
        const decoded = jwt.verify(token, chavesecreta) as TokenPayload;

        req.usuario = { id: decoded.id, tipo: decoded.tipo }

        next()
    }catch(error){
        console.error(error)
        throw new AppError("Token Inválido", 401);
    }
}