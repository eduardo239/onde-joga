import { useAuth } from "../../context/useAuth";
import { useState } from "react";
import { useFirebase } from "../../context/useFirebase";
import { CountrySelect } from "../../components/CountrySelect";

import style from "../../css/index";

export default function SaveTeam() {
  const { user } = useAuth();
  const { salvarTime } = useFirebase();

  const [nome, setNome] = useState("Team 1");
  const [country, setCountry] = useState("");
  const [escudoUrl, setEscudoUrl] = useState("https://picsum.photos/300/300");

  return (
    <div className={style.cssFlex}>
      <h2>Salvar Time</h2>
      <div className="px-4">
        <input
          className={style.cssInput}
          placeholder="Nome do time"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div className="px-4">
        <input
          className={style.cssInput}
          placeholder="País"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <div className="px-4">
        <input
          className={style.cssInput}
          placeholder="URL do escudo"
          value={escudoUrl}
          onChange={(e) => setEscudoUrl(e.target.value)}
        />
      </div>

      <CountrySelect setCountry={setCountry} />
      <button
        className={style.cssButton}
        onClick={() =>
          salvarTime(
            { nome, pais: country, escudoUrl, criadoEm: new Date() },
            user
          )
        }
      >
        Salvar
      </button>
    </div>
  );
}
