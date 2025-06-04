import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className="fixed top-1/2 left-4 transform -translate-y-1/2 flex items-center z-50 bg-red-800  text-white px-4 py-2 font-medium rounded-full hover:bg-red-900 hover:cursor-pointer shadow-md"
      >
        <ChevronLeft className="inline" />
        <span>Back</span>
      </button>
    </>
  );
};

export default BackButton;
