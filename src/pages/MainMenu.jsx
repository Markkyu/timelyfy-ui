import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import {
  ArrowRight,
  ChevronRight,
  Info,
  Notebook,
  School,
  Settings,
  Users,
} from "lucide-react";
import Card from "../components/Card";

const LOGO_URL =
  "https://mseufcandelaria.neolms.com/files/6191249/euC.png?lmsauth=6b113bc54de2f357d219b0c3ca81063c295c6955";

function MainMenu() {
  return (
    <>
      <div className="container-fluid h-dvh flex flex-col">
        <div className="flex flex-4 relative bg-gray-300 ">
          <div className="m-15 bg-red-200 flex justify-center space-x-4 w-full">
            {/* <div class="w-2 bg-red-800 h-full"></div> */}
            <div className="flex flex-col justify-center items-center  space-y-2">
              <h1 className="main-title text-gray-800 ">TIMELYFY</h1>
              <p className="text-2xl font-sans text-gray-800 ">
                Streamline your schedule
              </p>

              <div className="">
                <button className="flex bg-red-800 items-center rounded-full text-white shadow-lg font-semibold px-4 py-2">
                  Generate a Schedule
                  <ChevronRight className="ml-1" />
                </button>
              </div>
            </div>
          </div>

          <Link
            to="about"
            className="absolute bottom-2 right-2 hover:cursor-pointer"
          >
            <Info color="gray" />
          </Link>
        </div>

        <div className="flex flex-1 relative justify-evenly bg-gray-100">
          <div className="absolute inset-x-0 -top-10 flex justify-center gap-6 px-4">
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
        </div>
      </div>
    </>
  );
}

export default MainMenu;
