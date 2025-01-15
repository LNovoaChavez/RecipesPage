import { DataSource } from "typeorm";
import { Credential } from "../entities/Credential";
import { Recipe } from "../entities/Recipe";
import { User } from "../entities/User";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "./envs";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: Number(DB_PORT), // Convertir a número, ya que puede venir como string
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: true, // Usa esto solo en desarrollo
  logging: false,
  entities: [User, Credential, Recipe], // Asegúrate de que estos estén definidos y exportados correctamente
  subscribers: [],
  migrations: [],
});
