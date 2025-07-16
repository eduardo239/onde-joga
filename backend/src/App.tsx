import { useEffect } from "react";
import { useAuth } from "./context/useAuth";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TeamList from "./pages/teams/List";
import SaveTeam from "./pages/teams/Save";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

const cssButton =
  "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded";

function App() {
  const { user, setUser, loading, logout } = useAuth();

  if (loading) return <p>Carregando...</p>;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

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
