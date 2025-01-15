import React from 'react';
import Link from 'next/link';

const HomeMainImage = () => {
  return (
    <div className="relative mt-10 h-[80vh] flex items-center justify-start">
      {/* Imagen para pantallas grandes */}
      <div className="hidden md:flex absolute inset-0 items-center" style={{ justifyContent: 'flex-end' }}>
        <img 
          src="/todo.png" 
          alt="Background Image" 
          className="w-[80%] h-[90%] object-cover" 
          style={{ marginRight: '10%' }} // Ajusta este valor para mover la imagen más hacia la derecha
        />
      </div>
      {/* Imagen para pantallas pequeñas
      <div className=" md:hidden absolute inset-0 flex items-center justify-center">
        <img 
          src="/celu.jpeg" 
          alt="Mobile Background Image" 
          className="w-full h-full object-cover opacity-70"
        />
      </div> */}
      {/* Contenido de texto y botón */}
      <div className="absolute text-center mx-10 pt-10 inset-0 flex-col items-center justify-start md:relative md:text-left md:max-w-xl md:p-8 text-gray-800 md:ml-10 md:rounded-lg 2xl:px-20 2xl:max-w-2xl">
        <h1 className="text-5xl text-customGreen font-bold mb-4">EXPLORA DELICIOSAS RECETAS</h1>
        <p className="text-lg mb-4">¡Únete a nuestra app de recetas! Comparte tus creaciones culinarias y explora platos deliciosos de otros usuarios. Encontrarás inspiración y nuevas ideas para cocinar. ¡Sube tu receta y comienza a descubrir nuevas delicias hoy mismo!</p>
        <button className="px-8 text-xl py-3 bg-customGreen text-white font-bold rounded-md hover:bg-customGreen2 hover:text-white">EXPLORAR
        </button>
      </div>
    </div>
  );
}

export default HomeMainImage;
