import { auth } from "../firebase";
import { useState } from "react";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";

import style from "../css/index";

export default function Login() {
  const [email, setEmail] = useState("email@email.com");
  const [password, setPassword] = useState("123123");
  const [error, setError] = useState("");

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login feito com sucesso!");
    } catch (error) {
      if (error instanceof FirebaseError) {
        setError(error.message);
      } else {
        setError("Erro desconhecido");
      }
    }
  };

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
      <button className={style.cssButton} onClick={login}>
        Entrar
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
