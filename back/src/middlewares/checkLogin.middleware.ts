import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "../config/envs";
import { ClientError } from "../utils/errors";

// Middleware para verificar si el usuario está logueado
const checkLogin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const token = req.headers.authorization; // Obtener el token del encabezado de la solicitud
  if (!token) {
    return next(new ClientError("Token is required"));
  }

  try {
    // Verificar y decodificar el token JWT
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    req.body.userId = decoded.userId; // Adjuntar el userId al cuerpo de la solicitud
  } catch (error) {
    // Manejar un token inválido
    return next(new ClientError("Invalid token"));
  }

  console.log("Token Check OK");
  next(); // Continuar con la ejecución si todo está bien
};

export default checkLogin;
