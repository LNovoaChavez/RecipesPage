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
    <div className="max-w-6xl my-40 mx-auto flex flex-col lg:flex-row bg-black shadow-xl rounded-lg overflow-hidden p-6">
      {/* Sección de la imagen */}
      <div className="lg:w-1/2 p-4 flex justify-center items-center bg-gray-800 rounded-lg shadow-md">
        <img
          src={recipe?.image}
          alt={recipe?.name}
          className="object-cover rounded-lg max-w-full h-auto shadow-lg"
        />
      </div>
      
      {/* Sección de contenido textual */}
      <div className="lg:w-1/2 p-6 space-y-6 text-white bg-gray-800 rounded-lg shadow-md">
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-center text-customGreen">{recipe?.title}</h2>
        </div>
        
        {/* Ingredientes */}
        <div>
          <h3 className="text-xl font-semibold text-customGreen">Ingredientes</h3>
          <ul className="list-disc pl-6 space-y-2">
            {recipe?.ingredients}
          </ul>
        </div>
        
        {/* Descripción */}
        <div>
          <h3 className="text-xl font-semibold text-customGreen">Descripción</h3>
          <p className="text-lg">{recipe?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeID;
