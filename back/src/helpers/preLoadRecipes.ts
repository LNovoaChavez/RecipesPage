import { AppDataSource } from "../config/data-source";
import { Recipe } from "../entities/Recipe";
import { RecipeRepository } from "../repositories/recipe.repository";

interface IRecipe {
    title: string;
    description: string;
    ingredients: string;
    time: string;
    steps: string;
    userId: number;
    image: string;
}

const recipesToPre: IRecipe[] = [
    {
        title: "Delicious Pancakes",
        description: "Fluffy pancakes perfect for breakfast.",
        ingredients: "Flour, eggs, milk, sugar, baking powder, butter.",
        time: "20",
        steps: "Mix all ingredients, heat a pan, cook until golden brown.",
        userId: 10,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtoBqh1tvEfTTGAeb8pFGIfL3c5VqCbIQ2tA&s"
    },
    {
        title: "Classic Spaghetti",
        description: "A simple and classic spaghetti recipe.",
        ingredients: "Spaghetti, tomato sauce, garlic, olive oil, parmesan cheese.",
        time: "30",
        steps: "Boil spaghetti, prepare the sauce, mix and serve.",
        userId: 10,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtoBqh1tvEfTTGAeb8pFGIfL3c5VqCbIQ2tA&s"
    },
    {
        title: "Fresh Caesar Salad",
        description: "A healthy and delicious Caesar salad recipe.",
        ingredients: "Lettuce, croutons, Caesar dressing, parmesan cheese, chicken.",
        time: "15",
        steps: "Chop lettuce, add croutons, mix with dressing, top with cheese.",
        userId: 10,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtoBqh1tvEfTTGAeb8pFGIfL3c5VqCbIQ2tA&s"
    },
    {
        title: "Chocolate Brownies",
        description: "Rich and gooey chocolate brownies.",
        ingredients: "Cocoa powder, butter, sugar, eggs, flour, chocolate chips.",
        time: "40",
        steps: "Mix ingredients, bake in the oven, let cool and serve.",
        userId: 10,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtoBqh1tvEfTTGAeb8pFGIfL3c5VqCbIQ2tA&s"
    },
    {
        title: "Vegetable Stir Fry",
        description: "Quick and easy vegetable stir fry.",
        ingredients: "Mixed vegetables, soy sauce, garlic, ginger, sesame oil.",
        time: "25",
        steps: "Heat oil, add vegetables, stir fry with sauce, serve hot.",
        userId: 10,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtoBqh1tvEfTTGAeb8pFGIfL3c5VqCbIQ2tA&s"
    }
];


export const preLoadRecipes = async () => {
    const recipes = await RecipeRepository.find();
    if (!recipes.length) 
        await AppDataSource.createQueryBuilder()
        .insert()
        .into(Recipe)
        .values(recipesToPre)
        .execute();
    console.log("Recipes cargadas")
}