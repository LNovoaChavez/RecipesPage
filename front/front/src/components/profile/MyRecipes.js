"use client";
import { useAuth } from "@/context/AuthContext";
import { FetchRecipesByUser } from "@/helpers/recipesFetches";
import { useEffect, useState } from "react";
import CardsProfile from "../cardsProfile/cardsProfile";
import { FaPlus } from "react-icons/fa";
import ModalCreateRecipe from "./ModalCreateRecipe"; 

const MyRecipes = () => {
  const { dataUser } = useAuth(); 
  const [recipes, setRecipes] = useState([]); 
  const [isModalOpen, setIsModalOpen] = useState(false); 

  useEffect(() => {
    const fetchRecipes = async () => {
      if (dataUser?.token) {
        try {
          const fetchedRecipes = await FetchRecipesByUser(dataUser.token); 
          setRecipes(fetchedRecipes); 
        } catch (error) {
          console.error("Error fetching recipes: ", error);
        }
      }
    };

    fetchRecipes(); 
  }, [dataUser?.token]); 

  const handleOpenModal = () => {
    setIsModalOpen(true); 
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); 
  };

  return (
    <div className="relative"> 
      <button
        onClick={handleOpenModal}
        className="absolute top-0 right-0 mt-2 mr-2 bg-customGreen text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2 hover:bg-customGreen2 transition-all sm:px-2 sm:py-1"
        aria-label="Añadir una receta"
      >
        <span className="hidden sm:inline">Añadir una receta</span>
        <FaPlus className="sm:hidden" />
      </button>

      <h2 className="text-2xl font-semibold mb-4">Mis recetas</h2>
      <CardsProfile recipes={recipes} />

      {isModalOpen && (
        <ModalCreateRecipe onClose={handleCloseModal} token={dataUser?.token} />
      )}
    </div>
  );
};

export default MyRecipes;