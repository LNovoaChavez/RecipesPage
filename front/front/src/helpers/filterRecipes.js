export const filterRecipes = (recipes, query) => {
    if (!query) return recipes; // Si no hay query, devolver todas las recetas
  
    const queryLower = query.toLowerCase();
  
    return recipes.filter((recipe) => {
      // Verificar que recipe tenga propiedades necesarias y no estén vacías
      if (!recipe || !recipe.name || !recipe.ingredients) return false;
  
      const nameMatch = recipe.name.toLowerCase().includes(queryLower);
  
      // Asegurarse de que 'ingredients' sea un array y no vacío
      const ingredientsMatch = Array.isArray(recipe.ingredients)
        ? recipe.ingredients.some((ingredient) =>
            typeof ingredient === 'string' && ingredient.toLowerCase().includes(queryLower)
          )
        : false;
  
      return nameMatch || ingredientsMatch;
    });
  };
  