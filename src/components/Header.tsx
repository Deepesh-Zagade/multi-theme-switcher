import { Link } from "react-router";
import ThemeDropdown from "./ThemeDropdown";

export default function Header() {

  return (
    <header className="fixed top-0 w-full md:flex justify-between items-center px-6 py-4 shadow z-50">
      <div className="text-center">
        <Link to="/" className="text-2xl font-bold cursor-pointer">
          Multi Theme App
        </Link>
      </div>
      <div className="flex justify-around my-2 space-x-6">
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
      <div className="text-right">

      <ThemeDropdown />
      </div>
    </header>
  );
}
