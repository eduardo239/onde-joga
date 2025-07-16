import { useAuth } from "./context/useAuth";

import Login from "./pages/Login";
import Register from "./pages/Register";
import TeamList from "./pages/teams/TeamList";
import SaveTeam from "./pages/teams/SaveTeam";

const cssButton =
  "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded";

function App() {
  const { user, loading, logout } = useAuth();

  if (loading) return <p>Carregando...</p>;

  return (
    <section className="p-4">
      {user ? (
        <>
          <h1 className="text-2xl">Onde Joga Backend</h1>
          <button className={cssButton} onClick={logout}>
            Logout
          </button>

          <hr />
          <SaveTeam />
          <TeamList />
        </>
      ) : (
        <>
          <h1 className="text-2xl">Onde Joga Backend</h1>
          <Login />
          <Register />
        </>
      )}
    </section>
  );
}

export default App;
