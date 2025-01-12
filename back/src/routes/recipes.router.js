const { Router } = require("express");
const checkLogin = require("../middlewares/checkLogin.middleware");


const recipesRouter = Router();

// GET / - Trae todas las recetas sin importar el creador
recipesRouter.get("/", getAllRecipes);

// GET /:id - Trae la receta vinculada al id recibido en params
recipesRouter.get("/:id", getRecipe);

// POST / - Un usuario logueado puede crear una receta
recipesRouter.post("/", checkLogin, createRecipe);

// PUT /status/:id - Cambiar el estado de una receta (requiere autenticación)
recipesRouter.put("/status/:id", checkLogin, deleteRecipe);

module.exports = recipesRouter;
