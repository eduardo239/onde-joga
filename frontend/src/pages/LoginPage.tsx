import { useState } from "react";
import { AiFillApple, AiFillGoogleCircle } from "react-icons/ai";

import Container from "../components/Container";
import Text from "../components/Text";
import Input from "../components/Input";
import Button from "../components/Button";
import Divider from "../components/Divider";

import LOGO_WHITE from "../assets/logo_light.svg";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");

  return (
    <Container padding>
      <div className="mb-4"></div>
      <img className="logo rounded-md" src={LOGO_WHITE} alt="ondeJoga logo" />
      <Text textTitle>ondeJoga</Text>
      <Text>Selecione seus times favoritos.</Text>
      <div className="py-4 flex-1"></div>
      <div className="flex flex-col gap-2">
        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        <Button color="white">Próximo</Button>
        <Divider text="ou" />
        <Button color="black" icon={<AiFillGoogleCircle className="w-5 h-5" />}>
          Google
        </Button>
        <Button color="black" icon={<AiFillApple className="w-5 h-5" />}>
          Apple
        </Button>
      </div>
    </Container>
  );
}
