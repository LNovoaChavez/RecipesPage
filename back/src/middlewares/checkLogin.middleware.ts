import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "../config/envs";
import { ClientError } from "../utils/errors";

const checkLogin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const token = req.headers.authorization; 
  if (!token) {
    return next(new ClientError("Token is required"));
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    req.body.userId = decoded.userId; 
  } catch (error) {
    return next(new ClientError("Invalid token"));
  }

  console.log("Token Check OK");
  next(); 
};

export default checkLogin;
