import { db } from "../../firebase";
import { useState } from "react";
import { useAuth } from "../../context/useAuth";
import { deleteDoc, doc } from "firebase/firestore";

export interface TeamCardProps {
  pais: string;
  escudoUrl: string;
  nome: string;
  criadoEm: Date;
}

export interface TeamCardWithId extends TeamCardProps {
  id: string;
}

const TeamCard = ({ data }: { data: TeamCardWithId }) => {
  const { user } = useAuth();
  const [mensagem, setMensagem] = useState("");

  const removerTime = async (id: string) => {
    if (!user) return;

    try {
      await deleteDoc(doc(db, "times", id));
      setMensagem("Time removido com sucesso!");
    } catch (e) {
      console.error("Erro ao salvar time: ", e);
      setMensagem("Erro ao salvar.");
    }
  };

  if (data)
    return (
      <div className="w-64 overflow-hidden bg-gray-50 border border-gray-200">
        {mensagem && <p>{mensagem}</p>}
        <img
          className="w-full h-32 object-cover"
          src={data.escudoUrl}
          alt={data.nome}
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{data.nome}</h3>
        </div>
        <button
          onClick={() => removerTime(data.id)}
          className="bg-blue-100 hover:bg-blue-200 px-4 py-1 border-2 border-blue-500 text-red-500"
        >
          del
        </button>
      </div>
    );
};

export default TeamCard;
