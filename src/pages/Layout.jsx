import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Layout() {
  return (
    <>
      <div className="h-dvh flex flex-col overflow-hidden">
        <Header guest="Guest" />
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
