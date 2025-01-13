import { Request, Response } from "express";
import { catchedController } from "../utils/catchedController";
import { loginUserService, registerUserService } from "../services/user.services";

interface RegisterUserBody {
  email: string;
  password: string;
  name: string;
  lastname: string;
}

interface LoginUserBody {
  email: string;
  password: string;
}

const registerNewUser = catchedController(async (req: Request, res: Response) => {
  const { email, password, name, lastname }: RegisterUserBody = req.body;

  if (!email || !password || !name || !lastname) {
    return res.status(400).send({ message: "Missing fields" });
  }

  const newUser = await registerUserService({
    email,
    password,
    name,
    lastname,
  });
  res.status(201).send(newUser);
});

const login = catchedController(async (req: Request, res: Response) => {
  const { email, password }: LoginUserBody = req.body;

  if (!email || !password) {
    return res.status(400).send({ message: "Missing fields" });
  }

  const user = await loginUserService({ email, password });
  res.status(200).send({
    login: true,
    user: user.user,
    token: user.token,
  });
});

export { registerNewUser, login };
