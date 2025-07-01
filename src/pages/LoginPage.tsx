import { useState } from "react";
import Container from "../components/Container";
import Text from "../components/Text";
import Input from "../components/Input";
import Button from "../components/Button";
import LOGO_WHITE from "../assets/logo_light.svg";
import Divider from "../components/Divider";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");

  return (
    <Container padding>
      <div className="mb-4"></div>
      <img className="logo rounded-md" src={LOGO_WHITE} alt="ondeJoga logo" />
      <Text>ondeJoga</Text>
      <Text>Selecione seus times favoritos.</Text>
      <div className="py-4 flex-1"></div>
      <div className="flex flex-col gap-2">
        <Input value={email} onChange={(e) => setEmail(e.target.value)} />

        <Button color="white">Próximo</Button>

        <Divider text="ou" />
        <Button color="black">Google</Button>
        <Button color="black">Apple</Button>
      </div>
    </Container>
  );
}
