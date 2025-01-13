import { AppDataSource } from "../config/data-source";
import { Recipe } from "../entities/Recipe";

export const RecipeRepository = AppDataSource.getRepository(Recipe);
