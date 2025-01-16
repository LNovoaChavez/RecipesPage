import { Request, Response } from "express";
import { CreateRecipeDto } from "../dtos/createRecipe.dto"; 
import {
  getAllRecipesService,
  getRecipeByIdService,
  createRecipeService,
  updateRecipeStatusService,
  updateRecipeService,
} from "../services/recipe.services";

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

export const createRecipe = async (req: Request, res: Response): Promise<void> => {
  const { title, description, time, ingredients, steps, image, userId }: CreateRecipeDto = req.body;

  try {
    const newRecipe = await createRecipeService({
      title,
      description,
      ingredients,
      image,
      steps,
      time,
      userId,
    }); 
    res.status(201).send(newRecipe);
  } catch (err: any) {
    res.status(err.statusCode || 500).send({
      message: err.message,
    });
  }
};

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


export const updateRecipe = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { title, steps, image, description, time, ingredients } = req.body; 

  try {
    const updatedRecipe = await updateRecipeService(id, { title, steps, image, description, time, ingredients });
    res.status(200).send({
      message: "Recipe updated successfully",
      recipe: updatedRecipe,
    });
  } catch (err: any) {
    res.status(err.statusCode || 500).send({
      message: err.message,
    });
  }
};