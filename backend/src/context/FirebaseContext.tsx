import { useEffect, useState } from "react";
import { useCallback } from "react";

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebase";
import type { User } from "firebase/auth";
import { FirebaseContext } from "./useFirebase";
import type { TeamCardProps, TeamCardWithId } from "../pages/teams/TeamCard";

export const FirebaseProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  //
  const [times, setTimes] = useState<TeamCardWithId[]>([]);
  const [loading, setLoading] = useState(true);

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  const atualizarListaTimes = useCallback(async () => {
    const q = query(collection(db, "times"), orderBy("criadoEm", "desc"));

    const snapshot = await getDocs(q);
    const dados = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as TeamCardWithId[];

    setTimes(dados);
    setLoading(false);
  }, []);

  const salvarTime = async (data: TeamCardProps, user: User | null) => {
    if (!user) return;

    try {
      await addDoc(collection(db, "times"), data);
    } catch (e) {
      console.error("Erro ao salvar time: ", e);
    } finally {
      atualizarListaTimes();
    }
  };

  const removerTime = async (id: string, user: User | null) => {
    if (!user) return;

    try {
      await deleteDoc(doc(db, "times", id));
      // setMensagem("Time removido com sucesso!");
    } catch (e) {
      console.error("Erro ao salvar time: ", e);
      // setMensagem("Erro ao salvar.");
    } finally {
      atualizarListaTimes();
    }
  };
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  useEffect(() => {
    atualizarListaTimes();
  }, [atualizarListaTimes]);
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  return (
    <FirebaseContext.Provider
      value={{
        times,
        loading,

        salvarTime,
        removerTime,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
