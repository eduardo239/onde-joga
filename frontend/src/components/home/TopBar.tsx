import { FiCalendar, FiSearch } from "react-icons/fi";
import IconButton from "../IconButton";
import Text from "../Text";

export default function TopBar() {
  return (
    <div className="bg-gray-800 w-full">
      <div className="flex items-center justify-between p-4">
        <Text textWhite>Futebol</Text>
        <div className="flex items-center gap-2">
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
  );
}
