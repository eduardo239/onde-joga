import { useState } from "react";
import Container from "./Container";
import Text from "./Text";
import Input from "./Input";
import Button from "./Button";
// imagens
import LOGO_WHITE from "./assets/logo_light.svg";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Container padding>
      <img className="logo rounded-md" src={LOGO_WHITE} alt="ondeJoga logo" />
      <Text>ondeJoga</Text>
      <Text>Selecione seus times favoritos.</Text>

      <div className="py-4 flex-1"></div>
      <Input value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input value={password} onChange={(e) => setPassword(e.target.value)} />
      <div className="py-4"></div>
      <Button color="black">Continuar</Button>
    </Container>
  );
}
