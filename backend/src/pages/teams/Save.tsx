import { useState } from "react";
import { useFirebase } from "../../context/useFirebase";

import style from "../../css/index";

export default function SaveTeam() {
  const { salvarTime } = useFirebase();

  const [nome, setNome] = useState("Team 1");
  const [pais, setPais] = useState("Brazil");
  const [escudoUrl, setEscudoUrl] = useState("https://picsum.photos/300/300");

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
      <button
        className={style.cssButton}
        onClick={() =>
          salvarTime({ nome, pais, escudoUrl, criadoEm: new Date() })
        }
      >
        Salvar
      </button>
    </div>
  );
}
