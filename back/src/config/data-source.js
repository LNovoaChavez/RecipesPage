const { DataSource } = require("typeorm");
const { User } = require("../entities/User");
const { Credential } = require("../entities/Credentials");
const { Recipe } = require("../entities/Recipes");


const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : undefined,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false, // Usa esto solo en desarrollo
  logging: false,
  entities: [User, Credential , Recipe ],
  subscribers: [],
  migrations: [],
});

module.exports = AppDataSource;
