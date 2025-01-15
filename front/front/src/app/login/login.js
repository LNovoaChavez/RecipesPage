"use client";

import { useAuth } from "@/context/AuthContext";
import { LoginUser } from "@/helpers/auth.helper";
import { Routes } from "@/helpers/PathRoutes";
import { validateLoginForm } from "@/helpers/validationLogin";
import React, { useState, useEffect } from "react";
import { toast, Toaster } from "sonner";

const Login = () => {
  const { dataUser, setDataUser } = useAuth();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errorUser, setErrorUser] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await LoginUser(userData);
      setDataUser(res);
      document.cookie = `userSession=${JSON.stringify(res)}; path=/`;
      toast.success("Logeo exitoso", {
        position: "bottom-right",
        style: { backgroundColor: "green", color: "white" },
      });
    } catch (error) {
      toast.error(error.message, {
        position: "bottom-right",
        style: { backgroundColor: "red", color: "white" },
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    const errors = validateLoginForm(userData);
    setErrorUser(errors);
  }, [userData]);

  return (
    <div className="my-32">
      <Toaster />
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Iniciar Sesión
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-customCream2 p-12 rounded-lg shadow-lg"
      >
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className="shadow-md bg-gray-200 border border-gray-400 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@example.com"
            required
          />
          {errorUser.email && (
            <p className="text-red-500 text-sm mt-1">{errorUser.email}</p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Contraseña
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              className="shadow-md bg-gray-200 border border-gray-400 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-2/4 transform -translate-y-1/2 cursor-pointer text-gray-500"
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>
          {errorUser.password && (
            <p className="text-red-500 text-sm mt-1">{errorUser.password}</p>
          )}
        </div>
        <div className="text-start my-4">
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            ¿No tienes una cuenta?{' '}
            <a
              href={Routes.REGISTER} className="text-blue-500 hover:underline"
            >
              Crea una nueva
            </a>
          </p>
        </div>
        <button
          type="submit"
          className="text-white bg-customGreen hover:bg-customGreen2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
