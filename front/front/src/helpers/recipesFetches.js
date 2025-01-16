const apiURL = process.env.NEXT_PUBLIC_API_URL;

export const FetchRecipesByUser = async (token) => {
  try {
    const res = await fetch(`${apiURL}/users/recipes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token, 
      },
    });
    
    if (!res.ok) {
      throw new Error("Failed to fetch recipes");
    }
    
    const recipes = await res.json();
    return recipes;
  } catch (error) {
    throw new Error(error.message || "Error fetching recipes");
  }
};


export const CreateRecipe = async (recipeData, token) => {
  try {
    const res = await fetch(`${apiURL}/recipes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(recipeData), 
    });

    if (!res.ok) {
      throw new Error(`Error en la solicitud: ${res.statusText}`);
    }

    const createdRecipe = await res.json();
    return createdRecipe;
  } catch (error) {
    console.error("Error creando receta: ", error.response ? error.response.data : error);
    throw error;
  }
};



export const updateRecipeStatus = async (recipeId, currentStatus, token) => {
  const newStatus = currentStatus === "active" ? "inactive" : "active"; 

  try {
    const response = await fetch(`${apiURL}/recipes/status/${recipeId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token, 
      },
      body: JSON.stringify({ status: newStatus }),
    });

    if (response.ok) {
      const updatedRecipe = await response.json();
      return updatedRecipe.recipe.status; 
    } else {
      throw new Error("Failed to update recipe status");
    }
  } catch (error) {
    console.error("Error updating recipe status:", error);
    throw new Error("An error occurred while updating the recipe status");
  }
};

export const updateRecipe = async (recipeId, updatedData, token) => {
  try {
    const response = await fetch(`${apiURL}/recipes/${recipeId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,  
      },
      body: JSON.stringify(updatedData), 
    });

    if (!response.ok) {
      throw new Error(`Error al actualizar la receta: ${response.statusText}`);
    }

    const updatedRecipe = await response.json();
    return updatedRecipe;
  } catch (error) {
    console.error("Error al actualizar la receta:", error);
    throw new Error(error.message || "Error actualizando la receta");
  }
};