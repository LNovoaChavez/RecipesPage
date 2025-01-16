"use client"

import React, { useEffect, useState } from "react";
import Cards from "../cards";
import Link from "next/link";
import { FetchRecipes } from "@/helpers/fetchRecipes";
import { Routes } from "@/helpers/PathRoutes";

const HomeRecipes = () => {
  const [recipes, setRecipes] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedRecipes = await FetchRecipes();
      setRecipes(fetchedRecipes.slice(0, 3));
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center mx-2 my-4 mb-10">
      <h2 className="text-3xl font-semibold mb-6 text-customGreen  ">Algunas recetas</h2>
      <section className="w-full flex justify-center">
        <Cards recipes={recipes} />
      </section>
      <div className="mt-6">
        <Link href={Routes.RECIPES} className="px-8 text-lg md:text-xl py-3 bg-customGreen text-white font-bold rounded-md hover:bg-customGreen2 hover:text-white">
        Explorar más
          
        </Link>
      </div>
    </div>
  );
};

export default HomeRecipes;
