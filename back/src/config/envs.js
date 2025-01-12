const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 3000;
const DB_NAME = process.env.DB_NAME || "apprecipes";
const DB_USER = process.env.DB_USER || "postgres";
const DB_PASSWORD = process.env.DB_PASSWORD || "Luzdiamond";
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_PORT = Number(process.env.DB_PORT) || 5432;
const JWT_SECRET = process.env.JWT_SECRET || "secret";

module.exports = {
  PORT,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  JWT_SECRET,
};
