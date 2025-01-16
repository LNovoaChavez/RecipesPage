import { FaExclamationTriangle } from 'react-icons/fa'; // Importar un ícono para el error

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-customGreen2 text-black px-4 py-8">
      <div className="text-center p-8">
        <FaExclamationTriangle className="text-6xl mb-4 animate-bounce" /> {/* Icono de advertencia */}
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h3 className="text-2xl mb-4 font-semibold">Oops! This page doesn't exist.</h3>
        <p className="text-lg mb-6">But we have more exciting recipes and features for you...</p>
        <a 
          href="/" 
          className="px-8 py-3 bg-white text-customGreen font-bold rounded-lg hover:bg-black hover:text-white transition-all"
        >
          Go back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
