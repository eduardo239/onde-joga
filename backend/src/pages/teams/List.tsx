import style from "../../css/index";
import { useFirebase } from "../../context/useFirebase";
import TeamCard from "./TeamCard";

export default function TeamList() {
  const { times, loading } = useFirebase();

  if (loading) return <p>Carregando times...</p>;

  return (
    <div>
      <h2>Seus Times</h2>

      {times.length === 0 && <p>Nenhum time salvo.</p>}
      <div className={style.cssFlexGrid}>
        {times.map((data) => {
          return <TeamCard key={data.id} data={data} />;
        })}
      </div>
    </div>
  );
}
