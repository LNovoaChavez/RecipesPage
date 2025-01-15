const Nosotros = () => {
    return (
      <div id="nosotros" className="container mx-auto my-12 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-x-8">
          {/* Imagen */}
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img
              src="https://www.elespectador.com/resizer/v2/CNFADLC2KJD2PIX6R3IXMVEF64.jpg?auth=b20c062cb452466c83dbf006f599f263878481e03e46cb4b28f50a2bf9e04a75&width=920&height=613&smart=true&quality=60"
              alt="Imagen de la app"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
  
          {/* Texto */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
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
  