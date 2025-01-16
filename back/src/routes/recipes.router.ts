import { Router } from "express";

import checkLogin from "../middlewares/checkLogin.middleware";
import { createRecipe, getAllRecipes, getRecipe, updateRecipeStatus } from "../controllers/recipes.controller";

const recipesRouter = Router();

recipesRouter.get("/", getAllRecipes);
recipesRouter.get("/:id", getRecipe);
recipesRouter.post("/", checkLogin, createRecipe);
recipesRouter.put("/status/:id", checkLogin, updateRecipeStatus);

export default recipesRouter;
