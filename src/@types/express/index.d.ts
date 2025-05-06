
import { JwtPayload } from "jsonwebtoken";

declare module "express-serve-static-core" {
  interface Request {
    usuario?: {
      id: string;
      tipo: "CLIENTE" | "FEIRANTE";
    };
  }
}
