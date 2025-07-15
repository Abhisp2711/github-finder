import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white p-8 sm:flex sm:justify-between sm:items-start">
      {/* Left - Company Info */}
      <aside className="mb-6 sm:mb-0">
        <h2 className="text-xl font-bold mb-2">All-Friends Industries</h2>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} - All rights reserved.
        </p>
      </aside>

      {/* Right - Links and Social */}
      <div className="flex flex-col items-center sm:items-end gap-4">
        <div className="flex gap-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
        <div className="flex gap-4 text-xl">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
