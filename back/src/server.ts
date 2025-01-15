import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use(router);

app.use(
  (
    err: { statusCode?: number; message?: string }, // Tipado del error
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    res.status(err.statusCode || 500).send({
      statusCode: err.statusCode || 500,
      message: err.message || "Internal Server Error",
    });
  }
);

export default app;
