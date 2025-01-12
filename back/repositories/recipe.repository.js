const { AppDataSource } = require("../config/dataSource");
const { Recipe } = require("../entities/Recipe");

const RecipeRepository = AppDataSource.getRepository(Recipe);

module.exports = { RecipeRepository };
