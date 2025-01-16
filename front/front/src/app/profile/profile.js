"use client";
import MyRecipes from '@/components/profile/MyRecipes';
import UserProfile from '@/components/profile/UserProfile';
import React, { useState } from 'react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('user'); // Estado para manejar la pestaña activa

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="sm:max-w-[90%] mx-auto my-32 py-10">
      {/* Título principal "Tu cuenta" */}
      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Tu cuenta</h2>

      <div className="mb-4  border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px text-sm font-medium mx-2 text-center w-full" role="tablist">
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg 
                ${activeTab === 'user' ? 'bg-customGreen text-white' : 'bg-customGreen2 text-white'}`}
              type="button"
              onClick={() => handleTabClick('user')}
              role="tab"
              aria-selected={activeTab === 'user'}
            >
              Mi perfil
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg 
                ${activeTab === 'recipes' ? 'bg-customGreen text-white' : 'bg-customGreen2 text-white'}`}
              type="button"
              onClick={() => handleTabClick('recipes')}
              role="tab"
              aria-selected={activeTab === 'recipes'}
            >
              Mis recetas
            </button>
          </li>
        </ul>
      </div>

      <div id="default-tab-content" className="mx-4">
        <div className={`p-4 rounded-lg bg-white shadow-lg ${activeTab === 'user' ? 'block' : 'hidden'}`} role="tabpanel" aria-labelledby="profile-tab">
          <UserProfile />
        </div>
        <div className={`p-4 rounded-lg bg-white shadow-lg ${activeTab === 'recipes' ? 'block' : 'hidden'}`} role="tabpanel" aria-labelledby="dashboard-tab">
          <MyRecipes />
        </div>
      </div>
    </div>
  );
};

export default Profile;
