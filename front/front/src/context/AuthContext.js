"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext({
    dataUser: null,
    setDataUser: () => {},
});

// Proveedor del contexto
export const AuthProvider = ({ children }) => {
    const [dataUser, setDataUser] = useState(null);

    // Guardar en localStorage cuando `dataUser` cambia
    useEffect(() => {
        if (dataUser && typeof dataUser === "object") {
            localStorage.setItem("userSession", JSON.stringify(dataUser));
        }
    }, [dataUser]);
    

    // Recuperar datos del localStorage al montar
    useEffect(() => {
        if (typeof window !== "undefined" && window.localStorage) {
            const data = localStorage.getItem("userSession");
            if (data) {
                setDataUser(JSON.parse(data));
            }
        }
    }, []);

    return (
        <AuthContext.Provider value={{ dataUser, setDataUser }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook personalizado para usar el contexto
export const useAuth = () => useContext(AuthContext);
