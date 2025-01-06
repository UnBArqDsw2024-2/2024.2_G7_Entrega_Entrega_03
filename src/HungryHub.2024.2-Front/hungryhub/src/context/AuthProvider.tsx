import React, { createContext, useContext, useEffect, useState } from "react";
import { User, UserBody } from "../interfaces/user.interface";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthProviderProps {
  children: React.ReactNode;
}

interface UserContextProps {
  user: (User & UserBody) | undefined;
  setUser: (user: User & UserBody) => void;
  isSignedIn: boolean;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export const AuthContext = createContext<UserContextProps | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<(User & UserBody) | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const isSignedIn = !!user;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setIsLoading(true);
        const user = await AsyncStorage.getItem("user");
        if (user) {
          setUser(JSON.parse(user));
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, isSignedIn, isLoading, setIsLoading }}>
      {children}
    </AuthContext.Provider>
  );
}