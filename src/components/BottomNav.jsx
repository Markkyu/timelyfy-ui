import { Link } from "react-router-dom";
import {
  ChevronDown,
  ChevronUp,
  CircleHelp,
  Info,
  Notebook,
  School,
  Settings,
  Users,
} from "lucide-react";
import Card from "../components/Card";
import { useState } from "react";

const BottomNav = ({ initialOpened, showButton }) => {
  const [showCards, setShowCards] = useState(initialOpened);
  return (
    <div
      className={`transform transition-all duration-700 ease-in-out flex fixed w-full h-20 bottom-0 justify-evenly bg-gray-100 z-100
            ${
              showCards
                ? "translate-y-0 opacity-100"
                : "opacity-60 translate-y-30"
            }
        `}
    >
      {/* Button */}
      <div className="absolute inset-x-0 -top-10 flex justify-center gap-6 px-4 z-10">
        {showButton && (
          <div className="absolute -top-12 flex justify-center">
            <div
              onClick={() => setShowCards((prev) => !prev)}
              className="bg-red-700 text-white font-medium px-4 py-2 rounded-full hover:cursor-pointer hover:bg-red-800"
            >
              {showCards ? (
                <>
                  Hide Navigation <ChevronDown className="inline" />
                </>
              ) : (
                <>
                  Show Navigation <ChevronUp className="inline" />
                </>
              )}
            </div>
          </div>
        )}
        <Card
          title="Course List"
          description="Go to course directory"
          path_direct="courses"
        >
          <Notebook size={30} />
        </Card>

        <Card
          title="Classroom List"
          description="Go to room list directory"
          path_direct="rooms"
        >
          <School size={30} />
        </Card>

        <Card
          title="Teacher List"
          description="Go to teacher directory"
          path_direct="teachers"
        >
          <Users size={30} />
        </Card>

        <Card title="Settings" description="Go to settings">
          <Settings size={30} />
        </Card>
      </div>

      <div className="hidden 2xl:flex space-x-6 items-end p-2">
        <Link
          to="tutorial"
          className="flex items-center bottom-0 text-gray-700 font-medium space-x-1 hover:cursor-pointer hover:underline"
        >
          <CircleHelp size={20} color="#4d4d4d" />
          <span>Tutorial</span>
        </Link>
        <Link
          to="about"
          className="flex items-center bottom-0 text-gray-700 font-medium space-x-1 hover:cursor-pointer hover:underline"
        >
          <Info size={20} color="#4d4d4d" />
          <span>About</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
