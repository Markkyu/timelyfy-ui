import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Layout() {
  return (
    <div className="container-fluid h-dvh flex flex-col overflow-hidden">
      <Header guest="Guest" />
      <Outlet />
      {/* <footer className="absolute bottom-1 left-1/2 -translate-x-1/2 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Timelyfy: Auto-Scheduler</p>
      </footer> */}
    </div>
  );
}

export default Layout;
