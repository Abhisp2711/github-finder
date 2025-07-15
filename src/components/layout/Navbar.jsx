import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export default function Navbar({ title = "GitHubFinder" }) {
  return (
    <nav className="flex items-center justify-between bg-purple-900 p-2 text-white font-bold">
      <div className="flex items-center space-x-2">
        <FaGithub className=" text-xl" />
        <Link to="/" className=" text-white font-bold">
          {title}
        </Link>
      </div>

      <div className=" flex items-center space-x-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:text-pink-500 transition duration-100 ${
              isActive ? "text-pink-500" : ""
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `hover:text-pink-500 transition duration-100 ${
              isActive ? "text-pink-500" : ""
            }`
          }
        >
          About
        </NavLink>
      </div>
    </nav>
  );
}
