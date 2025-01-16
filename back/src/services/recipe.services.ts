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
  image,
  userId,
  status = "active",
}: CreateRecipeDto): Promise<Recipe> => {
  try {
    // Verifica que los campos requeridos no estén vacíos
    if (!title || !description || !ingredients) {
      throw new ClientError("Missing fields", 400);
    }

    // Busca el usuario por userId
    const user = await UserRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new ClientError("User not found", 404);  // Si el usuario no existe
    }

    // Crea una nueva instancia de Recipe
    const newRecipe = new Recipe();
    newRecipe.title = title;
    newRecipe.description = description;
    newRecipe.ingredients = ingredients;
    newRecipe.image = image;
    newRecipe.user = user;  // Asigna el objeto completo de User
    newRecipe.status = status;

    // Guarda la receta en la base de datos
    await RecipeRepository.save(newRecipe);

    return newRecipe; // Retorna la receta creada
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

    recipe.status = status ;  // Usa el estado recibido
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
