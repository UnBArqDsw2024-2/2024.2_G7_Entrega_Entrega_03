import React, { createContext, useContext, useEffect, useState } from "react";
import { User } from "../interfaces/user.interface";

interface AuthProviderProps {
    children: React.ReactNode;
}

interface UserContextProps {
    user: User | undefined;
    setUser: (user: User) => void; 
    isSignedIn: boolean;
    isLoading: boolean;
}

export const AuthContext = createContext<UserContextProps | undefined>(undefined);

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return context;
}

export default function AuthProvider({children}: AuthProviderProps) {
    const [user, setUser] = useState<User>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        //TODO: Consertar useEffect para recuperar corretamente o usuário logado
        setIsLoading(true);
        const user = localStorage.getItem("user");
        console.log(user);
        if (user) {
            setUser(JSON.parse(user));
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        console.log(user);
    }, [user]);

    return (
        <AuthContext.Provider value={{user, setUser, isSignedIn: !!user, isLoading}}>
            {children}
        </AuthContext.Provider>
    );
}