"use client";
import { useState } from "react";
import { CreateRecipe } from "@/helpers/recipesFetches";
import { Toaster } from "sonner";

const ModalCreateRecipe = ({ onClose, token }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    ingredients: "",
    image: "",
    time: "",
    steps: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = "El título es obligatorio";
    if (!formData.description) newErrors.description = "La descripción es obligatoria";
    if (!formData.ingredients) newErrors.ingredients = "Los ingredientes son obligatorios";
    if (!formData.time) newErrors.time = "El tiempo de cocina es obligatorio";
    if (!formData.steps) newErrors.steps = "Los pasos son obligatorios";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const recipeData = {
        title: formData.title,
        ingredients: formData.ingredients,
        description: formData.description,
        image: formData.image || undefined, 
        time: formData.time,
        steps: formData.steps,
      };

      const createdRecipe = await CreateRecipe(recipeData, token);

      toast.success("Creación exitosa", {
        duration: 2000, 
        style: {
          background: "#4caf50", 
          color: "#fff",
        },
      });

      setTimeout(() => {
        onClose(); 
      }, 1000);
    } catch (error) {
      console.error("Error creando receta: ", error);
    }
  };

     

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex mx-3 justify-center items-center">
      <div className="bg-white mt-10 sm:mt-20 rounded-lg p-6 w-full max-w-4xl h-[500px] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Añadir Receta</h2>
        <Toaster/>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block font-semibold mb-2">Título de la receta</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border border-gray-400 rounded-lg p-2"
              />
              {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-2">Ingredientes</label>
              <textarea
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 border-gray-400"
              />
              {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-2">Tiempo de cocina (en minutos)</label>
              <input
                type="number"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 border-gray-400"
              />
              {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-2">Pasos</label>
              <textarea
                name="steps"
                value={formData.steps}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 border-gray-400"
              />
              {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
            </div>

            <div className="mb-4 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block font-semibold mb-2">Descripción</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2 border-gray-400"
                />
                {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-2">Imagen (URL)</label>
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2 border-gray-400"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end space-x-4 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-customGreen text-white px-4 py-2 rounded-lg hover:bg-customGreen2"
            >
              Añadir
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalCreateRecipe;
