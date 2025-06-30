import Container from "./Container";
import Text from "./Text";

import IconButton from "./IconButton";
import { FiCalendar, FiSearch } from "react-icons/fi";
import Game from "./Game";

export default function HomePage() {
  return (
    <Container padding>
      <div className="bg-gray-800 w-full">
        <div className="flex align-center justify-between p-4">
          <Text>Futebol</Text>
          <div className="flex align-center gap-2">
            <button className="text-white bg-green-400 px-5 rounded-full">
              live
            </button>
            <IconButton
              icon={<FiCalendar className="w-5 h-5" />}
              size="md"
              variant="ghost"
            />
            <IconButton
              icon={<FiSearch className="w-5 h-5 " />}
              size="md"
              variant="ghost"
            />
          </div>
        </div>
      </div>
      <div className="py-2"></div>
      <Game />
      <Game />
      <Game />
      <Game />
    </Container>
  );
}
