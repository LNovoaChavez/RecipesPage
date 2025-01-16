"use client"
import Cards from "@/components/cards";
import { FetchRecipes } from "@/helpers/fetchRecipes";

const Recipes = async () => {
  const recipes = await FetchRecipes();

  return (
    <div className="flex flex-col items-center my-28  p-8 rounded-lg">
      <h2 className="text-4xl font-semibold mb-6 text-center text-customGreen text drop-shadow-sm">
        ¡Explora deliciosas recetas!
      </h2>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl">
        Aquí encontrarás todas las recetas creadas por nuestros talentosos miembros. ¡También puedes compartir la tuya y unirte a la comunidad culinaria!
      </p>
      <section className="w-full flex justify-center space-x-6 mt-8">
        <Cards recipes={recipes} />
      </section>
    </div>
  );
};

export default Recipes;
