import React, { useState } from "react";
import Container from "./Container";
import Input from "./Input";
import SplashPage from "./SplashPage";
import Text from "./Text";
import Divider from "./Divider";
import Button from "./Button";
// imagens
import LOGO_WHITE from "./assets/logo_light.svg";
import LoginPage from "./LoginPage";
import SelectTeamsPage from "./SelectTeamsPage";
import HomePage from "./HomePage";

function App() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <>
      <SplashPage />
      <LoginPage />
      <SelectTeamsPage />
      <HomePage />
    </>
  );
}

export default App;
