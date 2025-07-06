import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";

import style from "../css/index";

export default function Register() {
  const [email, setEmail] = useState("email@email.com");
  const [pass, setSenha] = useState("123123");
  const [confirmPass, setConfirmPassword] = useState("123123");
  const [error, setError] = useState("");

  const register = async () => {
    if (pass !== confirmPass) {
      setError("As senhas não são iguais");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, pass);
      console.log("Registrado com sucesso!");
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

      <input
        className={style.cssInput}
        placeholder="Senha"
        type="password"
        onChange={(e) => setConfirmPassword(e.target.value)}
        value={confirmPass}
      />

      <button className={style.cssButton} onClick={register}>
        Registrar
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
