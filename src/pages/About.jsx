import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function About() {
  return (
    <div className="max-w-3xl mx-auto mt-12 px-6 text-black">
      <h1 className="text-4xl font-bold mb-4 text-purple-400">
        About GitHub Finder
      </h1>
      <p className="mb-4 text-lg leading-relaxed">
        <span className="text-purple-500 font-semibold">GitHub Finder</span> is
        a simple React-based application that allows users to search for GitHub
        profiles and view key user details like their repositories, followers,
        bio, and more.
      </p>
      <p className="mb-4 text-lg">
        This app is built using:
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>React.js (Functional Components + Hooks)</li>
          <li>React Context API & useReducer for state management</li>
          <li>Tailwind CSS for UI styling</li>
          <li>GitHub API for fetching public user data</li>
        </ul>
      </p>
      <p className="mb-4 text-lg">
        It's a great example project to practice working with APIs, global
        state, and reusable components in React.
      </p>
      <p className="text-md text-pink-500">
        Developer{" "}
        <a
          href="https://github.com/abhisp2711"
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 hover:text-black"
        >
          Abhishek Kumar Singh
        </a>
      </p>

      <div className="mt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white font-semibold px-6 py-2 rounded transition"
        >
          <FaHome />
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default About;
