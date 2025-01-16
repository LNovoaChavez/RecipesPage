import { Routes } from "@/helpers/PathRoutes";
import { useRouter } from "next/navigation";

const Card = ({ recipe }) => {
  const router = useRouter();

  const truncateDescription = (description) => {
    const words = description.split(' ');
    if (words.length > 20) {
      return words.slice(0, 20).join(' ') + '...';
    }
    return description;
  };

  const handleCardClick = () => {
    router.push(`${Routes.RECIPES}/${recipe.id}`);
  };

  return (
    <div onClick={handleCardClick} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer">
      <img className="rounded-t-lg" src={recipe.image} alt={recipe.title} />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {recipe.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <span className="font-bold">Ingredients:</span> {recipe.ingredients}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {truncateDescription(recipe.description)}
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-customGreen rounded-lg hover:bg-customGreen2 focus:ring-4 focus:outline-none"
          onClick={(e) => e.stopPropagation()} // Para que no se active el onClick del contenedor
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
      </div>
    </div>
  );
};

export default Card;
