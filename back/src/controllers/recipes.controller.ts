import { Request, Response } from "express";
import { CreateRecipeDto } from "../dtos/createRecipe.dto"; // Importa la interfaz
import {
  getAllRecipesService,
  getRecipeByIdService,
  createRecipeService,
  updateRecipeStatusService,
} from "../services/recipe.services";

// Obtener todas las recetas
export const getAllRecipes = async (req: Request, res: Response): Promise<void> => {
  try {
    const recipes = await getAllRecipesService();
    res.status(200).send(recipes);
  } catch (err: any) {
    res.status(500).send({
      message: "Error retrieving recipes",
      error: err.message,
    });
  }
};

// Obtener una receta por ID
export const getRecipe = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const recipe = await getRecipeByIdService(id);
    res.status(200).send(recipe);
  } catch (err: any) {
    res.status(err.statusCode || 500).send({
      message: err.message,
    });
  }
};

// Crear una nueva receta
export const createRecipe = async (req: Request, res: Response): Promise<void> => {
  const { title, description, ingredients, image, userId }: CreateRecipeDto = req.body; // Usa la interfaz CreateRecipeDto

  try {
    const newRecipe = await createRecipeService({
      title,
      description,
      ingredients,
      image,
      userId,
    }); // Pasa un objeto con el tipo CreateRecipeDto
    res.status(201).send(newRecipe);
  } catch (err: any) {
    res.status(err.statusCode || 500).send({
      message: err.message,
    });
  }
};

// Actualizar el estado de una receta
export const updateRecipeStatus = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const updatedRecipe = await updateRecipeStatusService(id, status);
    res.status(200).send({
      message: "Recipe status updated successfully",
      recipe: updatedRecipe,
    });
  } catch (err: any) {
    res.status(err.statusCode || 500).send({
      message: err.message,
    });
  }
};
