import { FaExclamationTriangle, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-extrabold text-red-600 mb-3">Ooops !</h1>
      <FaExclamationTriangle className="text-5xl text-yellow-400" />
      <p className="text-xl mt-3 text-red-600 font-bold">
        404 - Page not found !
      </p>
      <Link
        to="/"
        className=" bg-purple-700 rounded p-1.5 font-semibold mt-4 flex items-center gap-1.5  hover:opacity-85 transition-all duration-300 text-white"
      >
        <FaHome />
        Back To Home
      </Link>
    </div>
  );
}

export default NotFound;
