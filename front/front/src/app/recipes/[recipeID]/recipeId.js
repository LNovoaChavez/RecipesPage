"use client";
import React, { useEffect, useState } from "react";
import { FetchRecipeById } from "@/helpers/fetchRecipes";

const RecipeID = ({ params }) => {
  const recipeID = React.use(params).recipeID; // Desempaquetamos el parámetro correctamente
  const [recipe, setRecipe] = useState(null);

  const fetchData = async () => {
    const fetchedRecipe = await FetchRecipeById(recipeID); // Utilizamos recipeID en la llamada
    setRecipe(fetchedRecipe);
  };

  useEffect(() => {
    if (recipeID) {
      fetchData();
    }
  }, [recipeID]);

  return (
    <div className="max-w-4xl mx-2 md:mx-auto my-40 bg-white rounded-lg shadow-lg p-8">
      {/* Imagen */}
      <div className="flex justify-center mb-8">
        <img
          src={recipe?.image}
          alt={recipe?.title}
          className="w-full max-w-md rounded-lg shadow-md"
        />
      </div>

      {/* Título */}
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        {recipe?.title}
      </h1>

      {/* Ingredientes */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Ingredientes</h2>
        <p>{recipe?.ingredients}</p>
      </div>

      {/* Descripción */}
      <div>
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Descripción</h3>
        <p className="text-lg text-gray-600 text-left">{recipe?.description}</p>
      </div>
    </div>
  );
};

export default RecipeID;
