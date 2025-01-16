import Card from "../card";

const Cards = ({ recipes }) => {
  if (!Array.isArray(recipes) || recipes.length === 0) {
    return <div>No recipes available</div>;
  }

  const activeRecipes = recipes.filter(recipe => recipe.status === "active");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {activeRecipes.length === 0 ? (
        <div>No active recipes available</div>
      ) : (
        activeRecipes.map((recipe) => {
          if (!recipe) return null;
          return <Card key={recipe.id} recipe={recipe} />;
        })
      )}
    </div>
  );
};

export default Cards;
