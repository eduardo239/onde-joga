import Container from "../components/Container";
import TopBar from "../components/home/TopBar";
import GameList from "../components/home/GameList";
import BottomBar from "../components/home/BottomBar";

export default function HomePage() {
  return (
    <Container padding>
      <TopBar />
      <div className="py-2"></div>
      <GameList />
      <div className="py-2"></div>
      <BottomBar />
    </Container>
  );
}
