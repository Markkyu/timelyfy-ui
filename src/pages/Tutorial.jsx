import { ChevronLeft, NotebookPen, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MainMenuButton from "../components/MainMenuButton";

const steps = [
  {
    title: "1. Add a College",
    description:
      "Start by creating a college in the system. Each college can have its own set of courses, teachers, and rooms. Navigate to the 'Colleges' section and click 'Add College'. Provide the name and other details.",
  },
  {
    title: "2. Add Courses for the College",
    description:
      "Once a college is added, go to the 'Courses' section. Select the college from the list and input the course name, course code, and other relevant details. Click 'Add Course' to save.",
  },
  {
    title: "3. Add Teachers",
    description:
      "In the 'Teachers' section, you can assign instructors to courses. Fill in the teacher's name, department, and preferred availability if applicable. Click 'Add Teacher' to proceed.",
  },
  {
    title: "4. Add Rooms",
    description:
      "Navigate to the 'Rooms' section to register available classrooms. Specify the room name or number, capacity, and building/floor if needed. Click 'Add Room' to save it to the list.",
  },
  {
    title: "5. Create Course–Teacher Combinations",
    description:
      "After adding the required data, go to the 'Assignments' tab. Select a course, then choose a teacher who can handle it. You can also optionally assign a preferred room or time block. Click 'Add Combination' to queue it for scheduling.",
  },
  {
    title: "6. Add to Queue",
    description:
      "Each course–teacher pair you create will be listed in the queue. You can review, edit, or remove combinations before proceeding. Make sure all necessary combinations are ready.",
  },
  {
    title: "7. Generate Schedule",
    description:
      "When all course–teacher combinations are added, head to the 'Scheduler' section and click 'Generate Schedule'. The system will automatically allocate timeslots and rooms while avoiding conflicts.",
  },
  {
    title: "Manual Override",
    icon: <Settings className="inline-block mr-2" />,
    description:
      "The user always has the option of manual adjustments if the schedule is not fit to their setup.",
  },
];

const Tutorial = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="bg-gray-200 overflow-auto">
      
      <MainMenuButton />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        <h1 className="flex items-center justify-center space-x-2 text-4xl font-bold mb-6 text-gray-800">
          <NotebookPen size="30" />
          <span>Tutorial: How to Use the Scheduler</span>
        </h1>
        <p className="text-gray-600 mb-12 text-lg text-center">
          Follow these steps to prepare your data and generate an automated
          class schedule for your college.
        </p>

        {steps.map(({ title, description, icon }, index) => (
          <div
            key={index}
            id={`my-index-${index}`}
            className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-red-800 duration-100"
          >
            <h2 className="flex items-center text-xl font-semibold text-gray-800 mb-2">
              {icon && icon}
              {title}
            </h2>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tutorial;
