import { useState } from "react";

import style from "../css/index";
import { useAuth } from "../context/useAuth";

export default function Login() {
  const { login, signInWithGoogle, signInWithGithub } = useAuth();

  const [email, setEmail] = useState("email@email.com");
  const [password, setPassword] = useState("123123");

  return (
    <div className={style.cssFlex}>
      <h1>Login</h1>
      <label>Email:</label>
      <input
        className={style.cssInput}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Senha:</label>
      <input
        className={style.cssInput}
        placeholder="Senha"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button
        className={style.cssButton}
        onClick={() => login(email, password)}
      >
        Entrar
      </button>

      <button
        onClick={signInWithGoogle}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Entrar com Google
      </button>

      <button onClick={signInWithGithub}>Entrar com Github</button>
    </div>
  );
}
