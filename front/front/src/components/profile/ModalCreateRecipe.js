"use client";
import { useState } from "react";
import { CreateRecipe } from "@/helpers/recipesFetches";

const ModalCreateRecipe = ({ onClose, token }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    ingredients: "",
    image: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = "El título es obligatorio";
    if (!formData.description) newErrors.description = "La descripción es obligatoria";
    if (!formData.ingredients) newErrors.ingredients = "Los ingredientes son obligatorios";
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
        image: formData.image || undefined, // Si la imagen está vacía, enviarla como undefined
      };

      const createdRecipe = await CreateRecipe(recipeData, token);
      console.log("Receta creada: ", createdRecipe);

      // Cerrar el modal después de crear la receta
      onClose();
    } catch (error) {
      console.error("Error creando receta: ", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex mx-3 justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Añadir Receta</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Título de la receta</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
            {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Ingredientes</label>
            <textarea
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
            {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Descripción</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
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
              className="w-full border rounded-lg p-2"
            />
          </div>
          <div className="flex justify-end space-x-4">
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
