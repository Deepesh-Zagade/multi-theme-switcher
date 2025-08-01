//Package Imports
import { Link } from "react-router";

//Project Imports
import ThemeDropdown from "./ThemeDropdown";

export default function SideBar() {
    return (
        <aside className="w-32 md:w-64 fixed h-screen bg-gray-900 text-gray-100 flex flex-col justify-between p-6 shadow-lg">
            <div>
                <h1 className="text-sm md:text-2xl font-bold mb-8">Multi Theme App</h1>
                <nav className="space-y-4 text-sm md:text-lg">
                    <Link to="/" className="block hover:bg-gray-800 rounded p-2">
                        Home
                    </Link>
                    <Link to="/about" className="block hover:bg-gray-800 rounded p-2">
                        About
                    </Link>
                    <Link to="/contact" className="block hover:bg-gray-800 rounded p-2">
                        Contact
                    </Link>
                </nav>
            </div>
            <div>
                <ThemeDropdown />
            </div>
        </aside>
    )
}