// src/TeamList.tsx
import { useEffect, useState } from "react";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { db } from "../../firebase";
import { useAuth } from "../../context/AuthContext";

import style from "../../css/index";
import TeamCard from "./TeamCard";

interface Time {
  id: string;
  nome: string;
  pais: string;
  escudoUrl: string;
}

export default function TeamList() {
  const { user } = useAuth();
  const [times, setTimes] = useState<Time[]>([]);
  const [loading, setLoading] = useState(true);

  const buscarTimes = async () => {
    if (!user) return;

    const q = query(
      collection(db, "times"),
      where("uid", "==", user.uid),
      orderBy("criadoEm", "desc")
    );

    const snapshot = await getDocs(q);
    const dados: Time[] = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Time[];

    setTimes(dados);
    setLoading(false);
  };

  useEffect(() => {
    buscarTimes();
  }, [user]);

  if (loading) return <p>Carregando times...</p>;

  return (
    <div>
      <h2>Seus Times</h2>
      <button className={style.cssButton} onClick={buscarTimes}>
        Atualizar
      </button>
      {times.length === 0 && <p>Nenhum time salvo.</p>}
      <div className={style.cssFlexGrid}>
        {times.map((time) => (
          <TeamCard
            key={time.id}
            imageUrl={time.escudoUrl}
            title={time.nome}
            body={time.pais}
          />
        ))}
      </div>
    </div>
  );
}
