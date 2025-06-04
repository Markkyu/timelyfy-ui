import {
  ChevronLeft,
  CirclePlus,
  FileSpreadsheet,
  House,
  Plus,
  Undo2,
} from "lucide-react";

const FloatingButton = ({
  onAddClick,
  onHomeClick,
  addLabel = "Add _______",
}) => {
  return (
    <>
      {/* <button
        // onClick={handleGoHome}
        title="Add Room"
        className="fixed top-1/2 -right-10 transform -translate-y-1/2 z-50 flex items-center bg-red-800 text-white px-2 py-2 rounded-full hover:bg-red-900 hover:cursor-pointer shadow-md"
      >
        <div className="absolute bg-amber-300 -left-10 size-10"></div>
        <div className="flex content-center font-medium text-2xl ">
          <CirclePlus className="inline mr-1" size="60" />
          <span className="text-red-800">aaa</span>
        </div>
      </button> */}

      <button className="group fixed top-1/2 -right-10 transform -translate-y-1/2 z-50 flex items-center bg-red-800 text-white px-2 py-2 rounded-full hover:bg-red-900 hover:cursor-pointer shadow-md">
        <div className="absolute right-full mr-4 hidden group-hover:flex items-center">
          <div className="relative bg-white text-gray-800 text-sm font-semibold px-4 py-2 rounded-xl shadow-md">
            Add Room
            <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-white" />
          </div>
        </div>

        <div className="flex content-center font-medium text-2xl">
          <CirclePlus className="inline mr-1" size="60" />
          <span className="text-red-800">aaa</span>
        </div>
      </button>

      {/* <div className="fixed bottom-8 right-8 flex flex-col items-end gap-3 z-50">
        <div className="flex flex-row items-center gap-2">
          <div className="text-lg font-sans">Upload CSV</div>
          <button
            className="bg-gray-50 shadow-lg rounded-full size-10 flex items-center justify-center border-2 cursor-pointer"
            title="Back to Home"
          >
            <FileSpreadsheet />
          </button>
        </div> */}

      {/* <div className="flex flex-row items-center gap-2">
          <div className="text-lg font-sans">Go Home</div>
          <button
            onClick={onHomeClick}
            className="bg-gray-50 shadow-lg rounded-full size-12 flex items-center justify-center border-2 cursor-pointer"
            title="Back to Home"
          >
            <House />
          </button>
        </div> */}

      {/* <div className="flex flex-row items-center gap-2">
          <div className="text-lg font-medium font-sans">{addLabel}</div>
          <button
            onClick={onAddClick}
            className="bg-gray-50 border-2 shadow-lg rounded-full size-16 flex items-center justify-center text-4xl transition cursor-pointer"
            title={addLabel}
          >
            <Plus size={30} />
          </button>
        </div>
      </div> */}
    </>
  );
};

export default FloatingButton;
