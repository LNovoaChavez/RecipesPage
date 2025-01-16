import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { Routes } from '@/helpers/PathRoutes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const LogOutComponent = () => {
  const { setDataUser } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    // Eliminar la sesión del almacenamiento local
    localStorage.removeItem('userSession');

    // Eliminar cookies
    document.cookie.split(";").forEach(cookie => {
      document.cookie = cookie
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });

    // Limpiar el estado del usuario y redirigir
    setDataUser(null);
    router.push(Routes.HOME);
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center justify-center p-2 rounded-full text-red-600 hover:bg-red-100 transition duration-300"
      aria-label="Logout"
    >
      <FontAwesomeIcon icon={faSignOutAlt} className="w-6 h-6" />
    </button>
  );
};

export default LogOutComponent;
