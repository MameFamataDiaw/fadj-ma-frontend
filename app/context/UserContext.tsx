'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from "axios";

interface User {
    prenom: string;
    nom: string;
    role: string;
}
interface UserContextType {
    user: User | null;
    setUser: (user: User | null) => void;
}


const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {

                // Recuperer le token des cookies
                const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];

                if (!token) {
                    console.log("Pas de token trouve");
                    setUser(null);
                    return;
                }

                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
                    withCredentials: true, // Assure l'envoi des cookies JWT 
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                console.log("Reponse API User:", res.data);  //Vérifie ce que le backend retourne

                if (res.data.user) {
                    setUser({
                        prenom: res.data.user.prenom,
                        nom: res.data.user.nom,
                        role: res.data.user.role,
                    });
                } else {
                    setUser(null);
                }

            } catch (error) {
                console.error("Erreur lors de la récupération des informations utilisateur", error);
                setUser(null);
            }
        };

        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) throw new Error("useUser doit être utilisé dans un UserProvider");
    return context;
};