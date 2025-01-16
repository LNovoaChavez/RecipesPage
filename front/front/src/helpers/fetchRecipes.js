const apiURL = process.env.NEXT_PUBLIC_API_URL;

export const FetchRecipes = async () => {
    try {
        const res = await fetch(`${apiURL}/recipes`, {
            method: "GET",
            headers: {
                "Cache-Control": "no-cache", 
            },
            next: { revalidate: 3600 }
        });
        const recipes = await res.json();
        return recipes;
    } catch (error) {
        throw new Error(error);
    }
};

export const FetchRecipeById = async (id) => {
    try {
        const recipes = await FetchRecipes();
        const recipe = recipes.find((recipe) => recipe?.id?.toString() === id);
        if (!recipe) {
            throw new Error("Recipe not found");
        }
        return recipe;
    } catch (error) {
        throw new Error(error);
    }
};
