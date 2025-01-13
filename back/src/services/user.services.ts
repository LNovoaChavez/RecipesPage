import { User } from "../entities/User";
import { UserRepository } from "../repositories/user.repository";
import { ClientError } from "../utils/errors";

import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/envs";
import RegisterUserDto from "../dtos/registerUser.dto";
import LoginUserDto from "../dtos/loginUser.dto";
import { checkPasswordService, createCredentialService } from "./credential.services";

export const checkUserExists = async (email: string): Promise<boolean> => {
  const user = await UserRepository.findOneBy({ email });
  return !!user;
};

export const registerUserService = async (
  registerUserDto: RegisterUserDto
): Promise<User> => {
  try {
    // Crear el usuario con la información del DTO
    const user = await UserRepository.create(registerUserDto);

    // Guardar el usuario en la base de datos
    await UserRepository.save(user);

    // Crear las credenciales para el usuario
    const credential = await createCredentialService({
      password: registerUserDto.password,
    });

    // Asignar las credenciales al usuario
    user.credential = credential;

    // Guardar el usuario con las credenciales
    await UserRepository.save(user);

    return user;
  } catch (error) {
    throw new Error("Error registering user: " + error.message);
  }
};

export const loginUserService = async (
  loginUserDto: LoginUserDto
): Promise<{ token: string; user: User }> => {
  try {
    // Buscar el usuario por email
    const user: User | null = await UserRepository.findOne({
      where: {
        email: loginUserDto.email,
      },
      relations: ["credential", "orders"], // Asegurarse de que las relaciones son correctas
    });

    if (!user) throw new ClientError("User not found", 404);

    // Verificar la contraseña
    const isPasswordValid = await checkPasswordService(
      loginUserDto.password,
      user.credential.password
    );

    if (!isPasswordValid) throw new ClientError("Invalid password", 400);

    // Generar el token JWT
    const token = jwt.sign({ userId: user.id }, JWT_SECRET);

    return { user, token };
  } catch (error) {
    throw new Error("Error logging in: " + error.message);
  }
};
