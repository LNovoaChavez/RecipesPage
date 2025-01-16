"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext({
    dataUser: null,
    setDataUser: () => {},
});

export const AuthProvider = ({ children }) => {
    const [dataUser, setDataUser] = useState(null);

    useEffect(() => {
        if (dataUser && typeof dataUser === "object") {
            localStorage.setItem("userSession", JSON.stringify(dataUser));
        }
    }, [dataUser]);
    

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

export const useAuth = () => useContext(AuthContext);
