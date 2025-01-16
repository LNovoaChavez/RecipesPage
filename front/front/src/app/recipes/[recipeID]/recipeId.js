"use client";
import React, { useEffect, useState } from "react";
import { FetchRecipeById } from "@/helpers/fetchRecipes";

const RecipeID = ({ params }) => {
  const recipeID = React.use(params).recipeID;
  const [recipe, setRecipe] = useState(null);

  const fetchData = async () => {
    const fetchedRecipe = await FetchRecipeById(recipeID);
    setRecipe(fetchedRecipe);
  };

  useEffect(() => {
    if (recipeID) {
      fetchData();
    }
  }, [recipeID]);

  return (
    <div className="max-w-4xl mx-2 md:mx-auto my-36 bg-white rounded-lg shadow-lg p-8">
      <div className="flex flex-col items-center mb-8">
        <img
          src={recipe?.image}
          alt={recipe?.title}
          className="w-full max-w-md rounded-lg shadow-md mb-4"
        />
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{recipe?.title}</h1>
          <div className="text-xl text-gray-600 mb-4">
            <p><strong>Ingredientes:</strong> {recipe?.ingredients}</p>
            <p><strong>Tiempo:</strong> {recipe?.time}</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Descripción</h3>
        <p className="text-lg text-gray-600 mb-4">{recipe?.description}</p>

        <h3 className="text-xl font-semibold text-gray-700 mb-4">Pasos</h3>
        <p className="pl-5 text-lg text-gray-600">{recipe?.steps}</p>
      </div>
    </div>
  );
};

export default RecipeID;
