import { Link } from "react-router-dom";
import {
  ChevronRight,
  CircleHelp,
  Info,
  Notebook,
  School,
  Settings,
  Users,
} from "lucide-react";
import Card from "../components/Card";

function MainMenu() {
  return (
    <>
      <div className="container-fluid h-dvh flex flex-col">
        <div className="flex flex-7 relative bg-gray-300">
          <div className="w-full flex justify-center items-center bg-gradient-to-br from-gray-50 to-gray-300 py-20 px-4 relative overflow-hidden">
            <div className="max-w-6xl w-full grid md:grid-cols-2 items-center gap-12 z-10">
              <div className="text-center md:text-left space-y-6">
                <h1 className="text-5xl 2xl:text-6xl font-extrabold text-gray-800 leading-tight tracking-tight">
                  Creating schedules with Timelyfy
                </h1>
                <p className="text-lg md:text-xl text-gray-700 font-medium z-1">
                  Timelyfy helps you automate college schedules. Just add
                  courses, assign rooms, match teachers — and we’ll handle the
                  rest.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-6">
                  <button className="flex items-center justify-center gap-2 bg-red-700 hover:bg-red-800 transition-all duration-200 text-white px-6 py-3 rounded-full shadow-md text-lg font-semibold hover:cursor-pointer z-1">
                    <ChevronRight size={20} />
                    Generate a Schedule
                  </button>
                  <Link
                    to=""
                    className="text-red-700 hover:cursor-pointer underline text-lg font-medium self-center sm:self-auto z-1"
                  >
                    <Notebook size={18} className="inline mr-2" />
                    View Schedules
                  </Link>
                </div>
              </div>

              <div className="flex justify-center">
                <img
                  src="https://cdni.iconscout.com/illustration/premium/thumb/scheduling-timetable-illustration-download-in-svg-png-gif-file-formats--task-management-time-business-planning-schedule-effective-artistry-pack-people-illustrations-5295176.png?f=webp"
                  // src="https://cdni.iconscout.com/illustration/premium/thumb/project-submission-time-illustration-download-in-svg-png-gif-file-formats--on-clock-design-and-development-pack-illustrations-2107744.png?f=webp"
                  alt="Scheduling Illustration"
                  className="w-full max-w-md z-1"
                />
              </div>

              <div className="absolute -top-10 -left-10 w-64 h-64 bg-red-600 rounded-full opacity-20 blur-3xl z-0" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500 rounded-full opacity-18 blur-3xl z-0" />
              <div className="absolute top-10 right-100 w-96 h-96 bg-yellow-500 rounded-full opacity-18 blur-3xl z-0" />
              <div className="absolute bottom-10 left-140 w-96 h-96 bg-blue-500 rounded-full opacity-12 blur-3xl z-0" />
              <div className="absolute -bottom-50 left-0 w-96 h-96 bg-green-500 rounded-full opacity-20 blur-3xl z-0" />
            </div>
          </div>

          <div className="2xl:hidden">
            <Link
              to="about"
              className="absolute top-2 right-2 hover:cursor-pointer"
            >
              <Info color="#919191" />
            </Link>
            <Link
              to="about"
              className="absolute top-2 right-10 hover:cursor-pointer"
            >
              <CircleHelp color="#919191" />
            </Link>
          </div>
        </div>

        <div className="flex flex-1 relative justify-evenly bg-gray-100">
          <div className="absolute inset-x-0 -top-10 flex justify-center gap-6 px-4 z-10">
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
              to="/"
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
      </div>
    </>
  );
}

export default MainMenu;
