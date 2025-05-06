import jwt from "jsonwebtoken";

interface PayloadToken {
    id: string,
    tipo: "CLIENTE" | "FEIRANTE"
}

export function gerarToken(payload: PayloadToken): string {
    const chavesecreta = process.env.CHAVE_TOKEN as string
    const token = jwt.sign(payload, chavesecreta, { expiresIn: "12h"} )

    return token;
}