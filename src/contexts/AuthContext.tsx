"use client";
import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

export type Auth = {
  isLogged: boolean;
};

export interface AuthContextInterface {
  auth: Auth;
  setAuth: Dispatch<SetStateAction<Auth>>;
}

const defaultState = {
  auth: {
    isLogged: false,
  },
  setAuth: (auth: Auth) => {},
} as AuthContextInterface;

export const AuthContext = createContext(defaultState);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState<Auth>({
    isLogged: false,
  });
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
