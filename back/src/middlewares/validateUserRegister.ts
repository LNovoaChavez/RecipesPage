import { Request, Response, NextFunction } from "express";
import { ClientError } from "../utils/errors";
import { checkUserExists } from "../services/user.services";

export const validateUserRegister = (req: Request, res: Response, next: NextFunction): void => {
  const { email, password, name, lastname } = req.body;

  if (!email || !password || !name || !lastname) {
    next(new ClientError("Missing required fields", 400));
  } else {
    next();
  }
};

export const validateUserExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { email } = req.body;

  if (await checkUserExists(email)) {
    next(new ClientError("User already exists", 400));
  } else {
    next();
  }
};

export default [validateUserRegister, validateUserExists];
