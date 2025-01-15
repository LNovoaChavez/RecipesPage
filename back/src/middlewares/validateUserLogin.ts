import { Request, Response, NextFunction } from "express";
import { checkUserExists } from "../services/user.services";

export const validateLogin = (req: Request, res: Response, next: NextFunction): void => {
  const { email, password } = req.body;

  if (!email || !password) {
    next({ message: "Missing fields", status: 400 });
  } else {
    next();
  }
};

export const validateUserExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { email } = req.body;

  if (!(await checkUserExists(email))) {
    next({ message: "User does not exist", statusCode: 400 });
  } else {
    next();
  }
};

export default [validateLogin, validateUserExists];
