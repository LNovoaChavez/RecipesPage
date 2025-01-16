import { Routes } from "@/helpers/PathRoutes";
import { useRouter } from "next/navigation";
import { FaTrash, FaEdit } from "react-icons/fa"; 
import { useState } from "react";
import { updateRecipeStatus } from "@/helpers/recipesFetches";
import { useAuth } from "@/context/AuthContext";
import ModalEditRecipe from "../profile/ModalEditRecipe";
import { Toaster, toast } from "sonner";

const CardProfile = ({ recipe, token }) => {
  const [status, setStatus] = useState(recipe.status);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const router = useRouter();
  const { dataUser } = useAuth();

  const truncateDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 20) {
      return words.slice(0, 20).join(" ") + "...";
    }
    return description;
  };

  const handleCardClick = () => {
    router.push(`${Routes.RECIPES}/${recipe.id}`);
  };

  const handleDeleteClick = async (e) => {
    e.stopPropagation();
    try {
      const newStatus = await updateRecipeStatus(recipe.id, status, dataUser?.token);
      setStatus(newStatus);
      toast.success("Se eliminó correctamente", {
        duration: 2000,
        style: {
          background: "#4caf50",
          color: "#fff",
        },
      });
    } catch (error) {
      toast.error("Ocurrió un error al eliminar");
    }
  };

  const handleEditClick = (e) => {
    e.stopPropagation();
    setEditModalOpen(true);
  };

  return (
    <div
      className="max-w-sm bg-white border mt-4 border-gray-300 rounded-lg shadow-lg cursor-pointer"
      onClick={handleCardClick}
    >
      <img
        className="rounded-t-lg"
        src={recipe.image}
        alt={recipe.title}
        href={`${Routes.RECIPES}/${recipe.id}`}
      />
      <div className="p-4">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {recipe.title}
        </h5>
        <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
          Tiempo de cocina: {recipe.time} minutos
        </p>
        <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
          <span className="font-bold">Ingredientes:</span> {recipe.ingredients}
        </p>
        <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
          {truncateDescription(recipe.description)}
        </p>
        <div className="flex justify-between items-center">
          <a
            href={`${Routes.RECIPES}/${recipe.id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-customGreen rounded-lg hover:bg-customGreen2 focus:ring-4 focus:outline-none"
            onClick={(e) => e.stopPropagation()}
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <div className="flex space-x-3">
            <button
              className="p-2 text-red-500 hover:text-red-700"
              aria-label="Delete"
              onClick={handleDeleteClick}
            >
              <FaTrash size={20} />
            </button>
            <button
              className="p-2 text-customGreen hover:text-customGreen2"
              aria-label="Edit"
              onClick={handleEditClick}
            >
              <FaEdit size={20} />
            </button>
          </div>
        </div>
      </div>
      {isEditModalOpen && (
        <ModalEditRecipe
          recipe={recipe}
          onClose={() => setEditModalOpen(false)}
          token={dataUser?.token}
        />
      )}
      <Toaster />
    </div>
  );
};

export default CardProfile;
