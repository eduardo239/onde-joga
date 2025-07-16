import { useEffect, useState } from "react";
import { useCallback } from "react";

import {
  addDoc,
  collection,
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
    console.log(dados);

    setTimes(times);
    setLoading(false);
  }, [times]);

  const salvarTime = async (data: TeamCardProps, user: User | null) => {
    if (!user) return;

    try {
      await addDoc(collection(db, "times"), data);
    } catch (e) {
      console.error("Erro ao salvar time: ", e);
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
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
