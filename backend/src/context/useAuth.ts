import type { User } from "firebase/auth";
import { createContext, useContext } from "react";

export interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  loading: boolean;
  logout: () => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signInWithGithub: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth deve ser usado dentro de AuthProvider");
  }
  return context;
};
