"use client"
import React from 'react';

const ContactInfo = () => {
  const handleContactClick = () => {
    window.location.href = 'mailto:apprecetas@gmail.com?subject=Sugerencia%20para%20la%20app%20de%20recetas';
  };

  return (
    <div id="contacto" className="max-w-4xl mx-auto my-10 p-6">
      <h2 className="text-3xl font-bold text-center text-customGreen mb-6">
        ¡Queremos saber de ti! 🌟
      </h2>
      
      <p className="text-lg text-gray-700 mb-4">
        Si tienes alguna sugerencia o comentario sobre nuestra app de recetas, ¡nos encantaría saber tu opinión! Puedes enviarnos un mensaje directamente al correo electrónico de nuestra app.
      </p>

      <div className="flex justify-center">
        <button
          onClick={handleContactClick}
          className="px-6 py-3 bg-customGreen text-white font-bold rounded-lg hover:bg-customGreen2 focus:ring-4 focus:outline-none"
        >
          Si tienes alguna sugerencia, ¡mándanos un mensaje!
        </button>
      </div>
    </div>
  );
};

export default ContactInfo;
