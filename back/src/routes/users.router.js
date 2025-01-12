const { Router } = require("express");
const validateUserLogin = require("../middlewares/validateUserLogin");
const checkLogin = require("../middlewares/checkLogin.middleware");
const { RecipeRepository } = require("../../repositories/recipe.repository");
const validateUserRegister = require("../middlewares/validateUserRegister");
const { registerNewUser, login } = require("../controllers/user.controller");

const usersRouter = Router();

usersRouter.post("/register", validateUserRegister, registerNewUser);

usersRouter.post("/login", validateUserLogin, login);

usersRouter.get("/recipes", checkLogin, async (req, res) => {
  const { userId } = req.body;
  try {
    const recipes = await RecipeRepository.find({
      relations: ["user"],  // Asegúrate de que "user" sea la relación correcta en Recipe
      where: { user: { id: userId } },
    });
    res.send(recipes);
  } catch (err) {
    res.status(500).send({
      message: "Error retrieving recipes",
      error: err.message,
    });
  }
});

module.exports = usersRouter;
