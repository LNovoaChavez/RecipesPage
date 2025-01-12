const { 
getAllRecipesService, 
getRecipeByIdService, 
createRecipeService, 
updateRecipeStatusService 
} = require("../services/recipes.services");

  
  const getAllRecipes = async (req, res) => {
    try {
      const recipes = await getAllRecipesService();
      res.status(200).send(recipes);
    } catch (err) {
      res.status(500).send({
        message: "Error retrieving recipes",
        error: err.message,
      });
    }
  };
  
  const getRecipe = async (req, res) => {
    const { id } = req.params;
    try {
      const recipe = await getRecipeByIdService(id);
      res.status(200).send(recipe);
    } catch (err) {
      res.status(err.statusCode || 500).send({
        message: err.message,
      });
    }
  };
  
  const createRecipe = async (req, res) => {
    const { title, description, ingredients, image, userId } = req.body;
    try {
      const newRecipe = await createRecipeService(title, description, ingredients, image, userId);
      res.status(201).send(newRecipe);
    } catch (err) {
      res.status(err.statusCode || 500).send({
        message: err.message,
      });
    }
  };
  
  const updateRecipeStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
      const updatedRecipe = await updateRecipeStatusService(id, status);
      res.status(200).send({
        message: "Recipe status updated successfully",
        recipe: updatedRecipe,
      });
    } catch (err) {
      res.status(err.statusCode || 500).send({
        message: err.message,
      });
    }
  };
  
  module.exports = {
    getAllRecipes,
    getRecipe,
    createRecipe,
    updateRecipeStatus,
  };
  