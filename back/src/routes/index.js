const { Router } = require("express");
const usersRouter = require("./users.router");
const recipesRouter = require("./recipes.router");

const router = Router();

router.use("/users", usersRouter);
router.use("/recipes", recipesRouter);

module.exports = router;
