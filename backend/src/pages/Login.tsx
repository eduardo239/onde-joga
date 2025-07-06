import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

import style from "../css/index";

export default function Login() {
  const [email, setEmail] = useState("email@email.com");
  const [pass, setSenha] = useState("123123");
  const [error, setError] = useState("");

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, pass);
      console.log("Login feito com sucesso!");
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className={style.cssFlex}>
      <h1>Login</h1>
      <input
        className={style.cssInput}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        className={style.cssInput}
        placeholder="Senha"
        type="password"
        onChange={(e) => setSenha(e.target.value)}
        value={pass}
      />
      <button className={style.cssButton} onClick={login}>
        Entrar
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
