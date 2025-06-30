import Container from "./Container";
import LOGO_WHITE from "./assets/logo_light.svg";

export default function Splash() {
  return (
    <Container padding>
      <div className="h-full flex justify-center items-center">
        <img className="logo rounded-md" src={LOGO_WHITE} alt="ondeJoga logo" />
      </div>
    </Container>
  );
}
