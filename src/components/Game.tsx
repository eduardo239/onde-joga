import IconButton from "./IconButton";
import { FiBell, FiCpu, FiStar } from "react-icons/fi";

export default function Game() {
  return (
    <div className="w-full text-sm mb-2 text-gray-800">
      <div className="flex gap-1 flex-col bg-white border-y border-gray-200 p-2">
        <div className="flex justify-between w-full">
          <div>
            <IconButton
              icon={<FiCpu className="w-5 h-5" />}
              size="md"
              variant="ghost"
            />
          </div>
          <div>FIFA World Cup</div>
          <div>
            <IconButton
              icon={<FiStar className="w-5 h-5" />}
              size="md"
              variant="ghost"
            />
          </div>
        </div>
        <div className="flex gap-3 justify-between items-center w-full ">
          <div>
            <span>11:00 PM</span>
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <span>team A</span>
              <span>1</span>
            </div>
            <div className="flex justify-between">
              <span>team B</span>
              <span>3</span>
            </div>
          </div>
          <div>
            <IconButton
              icon={<FiBell className="w-5 h-5" />}
              size="md"
              variant="ghost"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
