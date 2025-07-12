import { createContext, useContext } from "react";
import type { TeamCardProps, TeamCardWithId } from "../pages/teams/TeamCard";

export interface FirebaseContextType {
  times: TeamCardWithId[];
  loading: boolean;
  salvarTime: (data: TeamCardProps) => Promise<void>;
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
