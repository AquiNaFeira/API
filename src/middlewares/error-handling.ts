import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/appError";
import { ZodError } from "zod";


export function errorHandling(
    error: any,
    request: Request,
    response: Response,
    next: NextFunction
){
    if (response.headersSent) {
        next(error); 
    }

    if(error instanceof AppError){
        response.status(error.statuscode).json({ message: error.message });
    } else if(error instanceof ZodError){
        response.status(400).json({ message: "Erro na validação", issues: error.format()});
    } else{
        response.status(500).json({ message: error.message });
    }


};