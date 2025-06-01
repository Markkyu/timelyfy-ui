import { FileSpreadsheet, House, Plus, Undo2 } from "lucide-react";

const FloatingButton = ({
  onAddClick,
  onHomeClick,
  addLabel = "Add _______",
}) => {
  return (
    <>
      <div className="fixed bottom-8 right-8 flex flex-col items-end gap-3 z-50">
        <div className="flex flex-row items-center gap-2">
          <div className="text-lg font-sans">Upload CSV</div>
          <button
            // onClick={onHomeClick}
            className="bg-gray-50 shadow-lg rounded-full size-10 flex items-center justify-center border-2 cursor-pointer"
            title="Back to Home"
          >
            <FileSpreadsheet />
          </button>
        </div>

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

        <div className="flex flex-row items-center gap-2">
          <div className="text-lg font-medium font-sans">{addLabel}</div>
          <button
            onClick={onAddClick}
            className="bg-gray-50 border-2 shadow-lg rounded-full size-16 flex items-center justify-center text-4xl transition cursor-pointer"
            title={addLabel}
          >
            <Plus size={30} />
          </button>
        </div>
      </div>
    </>
  );
};

export default FloatingButton;
