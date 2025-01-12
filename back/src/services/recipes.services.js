const { RecipeRepository } = require("../repositories/recipe.repository");
const { ClientError } = require("../utils/errors");

const getAllRecipesService = async () => {
  try {
    return await RecipeRepository.find();
  } catch (err) {
    throw new Error("Error retrieving recipes: " + err.message);
  }
};

const getRecipeByIdService = async (id) => {
  try {
    const recipe = await RecipeRepository.findOne({
      where: { id },
    });
    if (!recipe) {
      throw new ClientError("Recipe not found", 404);
    }
    return recipe;
  } catch (err) {
    throw new Error("Error retrieving the recipe: " + err.message);
  }
};

const createRecipeService = async (title, description, ingredients, image, userId, status = "active") => {
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
      status,  // status default is "active" if not provided
    });

    return await RecipeRepository.save(newRecipe);
  } catch (err) {
    throw new Error("Error creating the recipe: " + err.message);
  }
};

const updateRecipeStatusService = async (id, status) => {
  try {
    const recipe = await RecipeRepository.findOne({
      where: { id },
    });
    if (!recipe) {
      throw new ClientError("Recipe not found", 404);
    }

    recipe.status = status;
    return await RecipeRepository.save(recipe);
  } catch (err) {
    throw new Error("Error updating recipe status: " + err.message);
  }
};

module.exports = {
  getAllRecipesService,
  getRecipeByIdService,
  createRecipeService,
  updateRecipeStatusService,
};
