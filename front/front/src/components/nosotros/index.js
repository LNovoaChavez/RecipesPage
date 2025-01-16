const Nosotros = () => {
  return (
    <div id="nosotros" className="container mx-auto mb-6 md:my-12 px-4">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between ">
        {/* Imagen */}
        <div className="md:w-1/2 mt-6 md:mt-0 md:mr-10">
          <img
            src="https://i.pinimg.com/736x/f0/0d/c6/f00dc674c6b25d855b4e5202aec7b046.jpg"
            alt="Imagen de la app"
            className="w-full h-auto rounded-lg sm:mt-4 shadow-lg"
          />
        </div>

        {/* Texto */}
        <div className="md:w-1/2 md:text-left my-5 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-customGreen">
            Acerca de cooking
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-400">
            En nuestra app, puedes subir tus propias recetas y descubrir
            las creaciones de otros usuarios. Con una interfaz sencilla y
            amigable, podrás compartir tus platos favoritos y explorar
            deliciosas opciones de cocina que te inspirarán a probar cosas
            nuevas. ¡Únete a nuestra comunidad culinaria y comienza a
            compartir tus recetas hoy mismo!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
