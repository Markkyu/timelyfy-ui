import { Link } from "react-router-dom";

const Card = ({ children, title, description, path_direct}) => {
  return (
    <Link to={`/${path_direct}`} className="flex items-center gap-x-2 bg-white rounded-lg shadow-lg border-y-2 border-red-800 w-60 2xl:w-80 p-4">
      {children}
      <div>
        <h2 className="font-bold text-lg text-black">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

export default Card;
