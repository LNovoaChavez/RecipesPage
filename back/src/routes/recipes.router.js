const { Router } = require("express");
const checkLogin = require("../middlewares/checkLogin.middleware");
const { RecipeRepository } = require("../repositories/recipe.repository");

const recipesRouter = Router();

// GET / - Trae todas las recetas sin importar el creador
recipesRouter.get("/", async (req, res) => {
  try {
    const recipes = await RecipeRepository.find();
    res.send(recipes);
  } catch (err) {
    res.status(500).send({
      message: "Error retrieving recipes",
      error: err.message,
    });
  }
});

// GET /:id - Trae la receta vinculada al id recibido en params
recipesRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const recipe = await RecipeRepository.findOne({
      where: { id },
    });
    if (!recipe) {
      return res.status(404).send({ message: "Recipe not found" });
    }
    res.send(recipe);
  } catch (err) {
    res.status(500).send({
      message: "Error retrieving the recipe",
      error: err.message,
    });
  }
});

// POST / - Un usuario logueado puede crear una receta
recipesRouter.post("/", checkLogin, async (req, res) => {
  const { title, description, ingredients, image, userId } = req.body;
  try {
    const newRecipe = RecipeRepository.create({
      title,
      description,
      ingredients,
      image,
      user: { id: userId }, // Relación con el usuario creador
    });
    await RecipeRepository.save(newRecipe);
    res.status(201).send(newRecipe);
  } catch (err) {
    res.status(500).send({
      message: "Error creating the recipe",
      error: err.message,
    });
  }
});

// PUT /status/:id - Cambiar el estado de una receta (requiere autenticación)
recipesRouter.put("/status/:id", checkLogin, async (req, res) => {
  const { id } = req.params;
  const { status } = req.body; // El nuevo estado a asignar
  try {
    const recipe = await RecipeRepository.findOne({ where: { id } });
    if (!recipe) {
      return res.status(404).send({ message: "Recipe not found" });
    }
    recipe.status = status;
    await RecipeRepository.save(recipe);
    res.send({ message: "Recipe status updated successfully", recipe });
  } catch (err) {
    res.status(500).send({
      message: "Error updating recipe status",
      error: err.message,
    });
  }
});

module.exports = recipesRouter;
