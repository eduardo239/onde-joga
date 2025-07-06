import Game from "./Game";

export default function GameList() {
  return (
    <div className="flex-1 overflow-scroll">
      <Game />
      <Game />
      <Game />
      <Game />
      <Game />
    </div>
  );
}
