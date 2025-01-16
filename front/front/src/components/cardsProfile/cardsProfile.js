import CardProfile from "./cardProfile";

const CardsProfile = ({ recipes }) => {
  if (!Array.isArray(recipes) || recipes.length === 0) {
    return <div>No recipes available</div>;
  }

  // Filtrar las recetas con estado 'active'
  const activeRecipes = recipes.filter(recipe => recipe.status === "active");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
      {activeRecipes.length === 0 ? (
        <div>No active recipes available</div>
      ) : (
        activeRecipes.map((recipe) => {
          if (!recipe) return null;
          return (
            <CardProfile
              key={recipe.id}
              recipe={recipe}
            />
          );
        })
      )}
    </div>
  );
};

export default CardsProfile;
