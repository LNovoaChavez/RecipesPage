import { CreateRecipeDto } from "../dtos/createRecipe.dto";
import { Recipe } from "../entities/Recipe";
import { RecipeRepository } from "../repositories/recipe.repository";
import { UserRepository } from "../repositories/user.repository";
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


const createRecipeService = async ({
  title,
  description,
  ingredients,
  steps,
  time,
  image,
  userId,
  status = "active",
}: CreateRecipeDto): Promise<Recipe> => {
  try {
    if (!title || !description || !ingredients ||!time || !steps) {
      throw new ClientError("Missing fields", 400);
    }

    const user = await UserRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new ClientError("User not found", 404);  
    }

    const newRecipe = new Recipe();
    newRecipe.title = title;
    newRecipe.description = description;
    newRecipe.ingredients = ingredients;
    newRecipe.steps = steps;
    newRecipe.time= time;
    newRecipe.image = image;
    newRecipe.user = user;  
    newRecipe.status = status;

    await RecipeRepository.save(newRecipe);

    return newRecipe; 
  } catch (err) {
    throw new Error("Error creating the recipe: " + err.message);
  }
};

const updateRecipeStatusService = async (id: string, status: "active" | "inactive"): Promise<Recipe> => {
  try {
    const recipe = await RecipeRepository.findOne({ where: { id } });
    if (!recipe) {
      throw new ClientError("Recipe not found", 404);
    }

    recipe.status = status ; 
    return await RecipeRepository.save(recipe);
  } catch (err) {
    throw new Error("Error updating recipe status: " + err.message);
  }
};
const updateRecipeService = async (
  id: string,
  { title, image, steps, description, time, ingredients }: Partial<Recipe>
): Promise<Recipe> => {
  try {
    const recipe = await RecipeRepository.findOne({ where: { id } });
    if (!recipe) {
      throw new ClientError("Recipe not found", 404);
    }

    if (title) recipe.title = title;
    if (image) recipe.image = image;
    if (description) recipe.description = description;
    if (steps) recipe.steps = steps;
    if (time) recipe.time = time;
    if (ingredients) recipe.ingredients = ingredients;

    return await RecipeRepository.save(recipe); 
  } catch (err) {
    throw new Error("Error updating recipe: " + err.message);
  }
};

export { 
  getAllRecipesService, 
  getRecipeByIdService, 
  createRecipeService, 
  updateRecipeService, 
  updateRecipeStatusService 
};