import { Link } from "react-router";
import ThemeDropdown from "./ThemeDropdown";

export default function Header() {

  return (
    <header className="fixed top-0 w-full flex justify-between items-center px-6 py-4 shadow z-50">
      <Link to="/" className="text-2xl font-bold">
        Multi Theme App
      </Link>
      <div className="flex space-x-6">
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
      <ThemeDropdown />
    </header>
  );
}
