"use client";

import { useEffect, useState } from "react";
import { toast, Toaster } from "sonner"; // Para notificaciones
import { RegisterNewUser } from "@/helpers/auth.helper";
import { validateRegister } from "@/helpers/validationRegister";
import { useRouter } from "next/navigation";
import { Routes } from "@/helpers/PathRoutes";

const Register = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [errorUser, setErrorUser] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await RegisterNewUser(userData);
      toast.success("Registro exitoso", {
        position: "bottom-right",
        style: { backgroundColor: "green", color: "white" },
      });
      setTimeout(() => {
        router.push(Routes.HOME);
      }, 1000);
    } catch (error) {
      toast.error(error.message || "Falló registro", {
        position: "bottom-right",
        style: { backgroundColor: "red", color: "white" },
      });
    }
  };

  useEffect(() => {
    const errors = validateRegister(userData);
    setErrorUser(errors);
  }, [userData]);

  return (
    <div className="my-32">
      <Toaster />
      {/* Título principal */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Registrar nueva cuenta
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-customCream2 p-12 rounded-lg shadow-lg"
      >
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nombre
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={userData.name}
            onChange={handleChange}
            className="shadow-md bg-gray-200 border border-gray-400 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          {errorUser.name && <p className="text-red-500 text-sm">{errorUser.name}</p>}
        </div>
        <div className="mb-5">
          <label
            htmlFor="lastname"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Apellido
          </label>
          <input
            id="lastname"
            name="lastname"
            type="text"
            value={userData.lastname}
            onChange={handleChange}
            className="shadow-md bg-gray-200 border border-gray-400 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          {errorUser.lastname && (
            <p className="text-red-500 text-sm">{errorUser.lastname}</p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={userData.email}
            onChange={handleChange}
            className="shadow-md bg-gray-200 border border-gray-400 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          {errorUser.email && <p className="text-red-500 text-sm">{errorUser.email}</p>}
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Contraseña
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={userData.password}
            onChange={handleChange}
            className="shadow-md bg-gray-200 border border-gray-400 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          {errorUser.password && (
            <p className="text-red-500 text-sm">{errorUser.password}</p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="repeatPassword"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Confirmar contraseña
          </label>
          <input
            id="repeatPassword"
            name="repeatPassword"
            type="password"
            value={userData.repeatPassword}
            onChange={handleChange}
            className="shadow-md bg-gray-200 border border-gray-400 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          {errorUser.repeatPassword && (
            <p className="text-red-500 text-sm">{errorUser.repeatPassword}</p>
          )}
        </div>
        {/* Enlace para redirigir a login */}
        <p className="text-sm text-gray-600 mb-5">
          ¿Ya tienes una cuenta?{" "}
          <a href={Routes.LOGIN} className="text-blue-500 hover:underline">
            Ingresa normalmente
          </a>
        </p>
        <button
          type="submit"
          className="text-white bg-customGreen hover:bg-customGreen2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Crear Cuenta
        </button>
      </form>
    </div>
  );
};

export default Register;
