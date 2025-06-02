import { Link } from "react-router-dom";

function Header({ guest }) {
  return (
    <div className="flex relative items-center bg-red-800 text-white text-xl z-1 p-2">
      <Link to="/" className="hover:text-gray-200 flex items-center">
        <img
          className="invert h-8 inline"
          src="https://static.vecteezy.com/system/resources/previews/019/879/196/non_2x/passage-of-time-icon-on-transparent-background-free-png.png"
          alt="Timelyfy Logo"
        />
        <span>
          <b>Timelyfy</b>: Automated Scheduler
        </span>
      </Link>
      <div className="flex items-center absolute right-0">
        <span> {guest} </span>
        <img
          className="h-8"
          src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
          alt="account"
        />
      </div>
    </div>
  );
}

export default Header;
