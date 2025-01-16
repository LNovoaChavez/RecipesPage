"use client";
import { useAuth } from "@/context/AuthContext";
import { FetchRecipesByUser } from "@/helpers/recipesFetches";
import { useEffect, useState } from "react";
import CardsProfile from "../cardsProfile/cardsProfile";
import { FaPlus } from "react-icons/fa";
import ModalCreateRecipe from "./ModalCreateRecipe"; // Importamos el nuevo componente

const MyRecipes = () => {
  const { dataUser } = useAuth(); // Obtener datos del usuario (incluyendo el token)
  const [recipes, setRecipes] = useState([]); // Estado para almacenar las recetas
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal

  useEffect(() => {
    const fetchRecipes = async () => {
      if (dataUser?.token) {
        try {
          const fetchedRecipes = await FetchRecipesByUser(dataUser.token); // Usamos el token para la petición
          setRecipes(fetchedRecipes); // Guardamos las recetas en el estado
        } catch (error) {
          console.error("Error fetching recipes: ", error);
        }
      }
    };

    fetchRecipes(); // Llamamos a la función para hacer la solicitud
  }, [dataUser?.token]); // Dependemos de `dataUser?.token` para que se ejecute cuando esté disponible

  const handleOpenModal = () => {
    setIsModalOpen(true); // Abrir el modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Cerrar el modal
  };

  return (
    <div className="relative"> {/* Contenedor relativo para posicionar el botón */}
      {/* Botón para añadir receta */}
      <button
        onClick={handleOpenModal}
        className="absolute top-0 right-0 mt-2 mr-2 bg-customGreen text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2 hover:bg-customGreen2 transition-all sm:px-2 sm:py-1"
        aria-label="Añadir una receta"
      >
        {/* Mostrar texto en pantallas grandes y solo ícono en pantallas pequeñas */}
        <span className="hidden sm:inline">Añadir una receta</span>
        <FaPlus className="sm:hidden" />
      </button>

      <h2 className="text-2xl font-semibold mb-4">Mis recetas</h2>
      <CardsProfile recipes={recipes} />

      {/* Modal para crear una receta */}
      {isModalOpen && (
        <ModalCreateRecipe onClose={handleCloseModal} token={dataUser?.token} />
      )}
    </div>
  );
};

export default MyRecipes;