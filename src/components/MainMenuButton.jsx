import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MainMenuButton = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <>
      <button
        onClick={handleGoHome}
        className="fixed top-1/2 left-4 transform -translate-y-1/2 z-50 flex items-center bg-red-800 text-white px-4 py-2 rounded-full hover:bg-red-900 hover:cursor-pointer shadow-md"
      >
        <div className="flex items-center font-medium">
          <ChevronLeft className="inline" />
          Main Menu
        </div>
      </button>
    </>
  );
};

export default MainMenuButton;
