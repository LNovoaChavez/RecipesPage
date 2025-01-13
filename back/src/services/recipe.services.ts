import { Recipe } from "../entities/Recipe";
import { RecipeRepository } from "../repositories/recipe.repository";
import { ClientError } from "../utils/errors";

const getAllRecipesService = async (): Promise<Recipe[]> => {
  try {
    return await RecipeRepository.find();
  } catch (err) {
    throw new Error("Error retrieving recipes: " + err.message);
  }
};

const getRecipeByIdService = async (id: string): Promise<Recipe | null> => {
  try {
    const recipe = await RecipeRepository.findOne({ where: { id } });
    if (!recipe) {
      throw new ClientError("Recipe not found", 404);
    }
    return recipe;
  } catch (err) {
    throw new Error("Error retrieving the recipe: " + err.message);
  }
};

interface CreateRecipeParams {
  title: string;
  description: string;
  ingredients: string;
  image?: string;
  userId: string;
  status?: string;
}

const createRecipeService = async ({
  title,
  description,
  ingredients,
  image,
  userId,
  status = "active",
}: CreateRecipeParams): Promise<Recipe> => {
  try {
    if (!title || !description || !ingredients) {
      throw new ClientError("Missing fields", 400);
    }

    const newRecipe = RecipeRepository.create({
      title,
      description,
      ingredients,
      image,
      user: { id: userId },
      status,
    });

    return await RecipeRepository.save(newRecipe);
  } catch (err) {
    throw new Error("Error creating the recipe: " + err.message);
  }
};

const updateRecipeStatusService = async (id: string, status: string): Promise<Recipe> => {
  try {
    const recipe = await RecipeRepository.findOne({ where: { id } });
    if (!recipe) {
      throw new ClientError("Recipe not found", 404);
    }

    recipe.status = "inactive";
    return await RecipeRepository.save(recipe);
  } catch (err) {
    throw new Error("Error updating recipe status: " + err.message);
  }
};

export {
  getAllRecipesService,
  getRecipeByIdService,
  createRecipeService,
  updateRecipeStatusService,
};
