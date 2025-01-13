import { Router } from "express";
import usersRouter from "./users.router";
import recipesRouter from "./recipes.router";

const router = Router();

router.use("/users", usersRouter);
router.use("/recipes", recipesRouter);

export default router;
