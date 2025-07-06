import IconButton from "../IconButton";
import { FiBook, FiClock, FiStar, FiUser } from "react-icons/fi";

export default function BottomBar() {
  return (
    <div className="flex flex-row justify-between items-center ml-2 mr-2 mb-2">
      <IconButton
        icon={<FiClock className="w-8 h-8 p-1" />}
        size="md"
        variant="ghost"
      />
      <IconButton
        icon={<FiStar className="w-8 h-8 p-1" />}
        size="md"
        variant="ghost"
      />
      <IconButton
        icon={<FiBook className="w-8 h-8 p-1" />}
        size="md"
        variant="ghost"
      />
      <IconButton
        icon={<FiUser className="w-8 h-8 p-1" />}
        size="md"
        variant="ghost"
      />
    </div>
  );
}
