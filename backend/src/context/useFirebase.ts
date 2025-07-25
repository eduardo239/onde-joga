import type { User } from "firebase/auth";
import { createContext, useContext } from "react";
import type { TeamCardProps, TeamCardWithId } from "../pages/teams/TeamCard";

export interface FirebaseContextType {
  times: TeamCardWithId[];
  loading: boolean;
  salvarTime: (data: TeamCardProps, user: User | null) => Promise<void>;
  removerTime: (id: string, user: User | null) => Promise<void>;
}

export const FirebaseContext = createContext<FirebaseContextType | undefined>(
  undefined
);

export const useFirebase = () => {
  const context = useContext(FirebaseContext);
  if (context === undefined) {
    throw new Error("useFirebase deve ser usado dentro de FirebaseProvider");
  }
  return context;
};
