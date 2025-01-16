"use client";

import { Routes } from "@/helpers/PathRoutes";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext"; // Asegúrate de importar correctamente tu contexto
import LogOutComponent from "../logout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { dataUser } = useAuth(); // Obtén dataUser del contexto de Auth

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-customCream fixed w-full z-20 top-0 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href={Routes.HOME}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl md:text-3xl font-semibold whitespace-nowrap">
              Cook<strong className="text-customGreen">ing</strong>
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {dataUser?.token ? (
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Link href={Routes.PROFILE}>
                  <button
                    type="button"
                    className="text-white text-lg bg-customGreen hover:bg-customGreen2 focus:ring-4 focus:outline-none font-medium rounded-md px-4 py-2 text-center flex items-center"
                  >
                    <FontAwesomeIcon icon={faUser} className="w-5 h-5 mr-2" />
                  </button>
                </Link>
                <LogOutComponent />
              </div>
            ) : (
              <Link href={Routes.REGISTER}>
                <button
                  type="button"
                  className="text-white text-lg bg-customGreen hover:bg-customGreen2 focus:ring-4 focus:outline-none font-medium rounded-md px-4 py-2 text-center"
                >
                  Registrarse
                </button>
              </Link>
            )}
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between ${
              isMenuOpen ? "block" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg bg-customCream2 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-customCream">
              <li>
                <a
                  href={Routes.HOME}
                  className="block py-2 px-3 text-black hover:bg-customCream hover:transform hover:scale-105 transition-all duration-300 md:bg-transparent md:p-0 md:border-b-2 md:border-customGreen"
                  aria-current="page"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href={`${Routes.HOME}#nosotros`}
                  className="block py-2 px-3 text-black hover:bg-customCream hover:transform hover:scale-105 transition-all duration-300 md:bg-transparent md:p-0 md:border-b-2 md:border-customGreen"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href={Routes.RECIPES}
                  className="block py-2 px-3 text-black hover:bg-customCream hover:transform hover:scale-105 transition-all duration-300 md:bg-transparent md:p-0 md:border-b-2 md:border-customGreen"
                >
                  Explora
                </a>
              </li>
              <li>
                <a
                  href={`${Routes.HOME}#contacto`}
                  className="block py-2 px-3 text-black hover:bg-customCream hover:transform hover:scale-105 transition-all duration-300 md:bg-transparent md:p-0 md:border-b-2 md:border-customGreen"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
