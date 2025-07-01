import Container from "../components/Container";
import Text from "../components/Text";
import Button from "../components/Button";
import LOGO_WHITE from "../assets/logo_light.svg";
import ImageGrid from "../components/ImageGrid";
import Divider from "../components/Divider";

export default function SelectTeamsPage() {
  return (
    <Container padding>
      <div className="mb-4"></div>
      <img className="logo rounded-md" src={LOGO_WHITE} alt="ondeJoga logo" />
      <Text>ondeJoga</Text>
      <Text>Selecione seus times favoritos.</Text>
      <div className="py-4 flex-1"></div>
      <ImageGrid />
      <Divider />
      <div className="py-1"></div>
      <Button color="black">Continuar</Button>
    </Container>
  );
}
