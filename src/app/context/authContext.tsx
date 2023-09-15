"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isLogged: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLogged, setIsLogged] = useState<boolean>(false); // Inicializado a false

  useEffect(() => {
    // Este bloque se ejecutará solo en el lado del cliente
    const storedIsLogged = localStorage.getItem('isLogged');
    if (storedIsLogged) {
      setIsLogged(JSON.parse(storedIsLogged));
    }
  }, []); // Dependencias vacías para que solo se ejecute una vez

  const login = () => {
    setIsLogged(true);
  };

  const logout = () => {
    setIsLogged(false);
  };

  // Actualizar localStorage cuando cambie isLogged
  useEffect(() => {
    localStorage.setItem('isLogged', JSON.stringify(isLogged));
  }, [isLogged]);

  return (
    <AuthContext.Provider value={{ isLogged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};