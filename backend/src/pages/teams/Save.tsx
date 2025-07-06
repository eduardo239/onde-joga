import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useAuth } from "../../context/AuthContext";

import style from "../../css/index";

export default function SaveTeam() {
  const { user } = useAuth();
  const [nome, setNome] = useState("Team 1");
  const [pais, setPais] = useState("Brazil");
  const [escudoUrl, setEscudoUrl] = useState("https://picsum.photos/300/300");
  const [mensagem, setMensagem] = useState("");

  const salvarTime = async () => {
    if (!user) return;

    try {
      await addDoc(collection(db, "times"), {
        uid: user.uid,
        nome,
        pais,
        escudoUrl,
        criadoEm: new Date(),
      });
      setMensagem("Time salvo com sucesso!");
      // setNome("");
      // setPais("");
      // setEscudoUrl("");
    } catch (e) {
      console.error("Erro ao salvar time: ", e);
      setMensagem("Erro ao salvar.");
    }
  };

  return (
    <div className={style.cssFlex}>
      <h2>Salvar Time</h2>
      <input
        className={style.cssInput}
        placeholder="Nome do time"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        className={style.cssInput}
        placeholder="País"
        value={pais}
        onChange={(e) => setPais(e.target.value)}
      />
      <input
        className={style.cssInput}
        placeholder="URL do escudo"
        value={escudoUrl}
        onChange={(e) => setEscudoUrl(e.target.value)}
      />
      <button className={style.cssButton} onClick={salvarTime}>
        Salvar
      </button>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}
