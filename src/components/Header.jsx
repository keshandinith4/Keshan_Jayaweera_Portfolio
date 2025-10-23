import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-black shadow-md w-full">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-white">Keshan Jayaweera</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-15 font-medium text-white">
          <div className="hover:text-blue-600 transition-colors">
            Home
          </div>
          <div className="hover:text-blue-600 transition-colors">
            About
          </div>
          <div className="hover:text-blue-600 transition-colors">
            Projects
          </div>
        </nav>

        {/* Contact Us btn */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-all">
          Contact US
        </button>
      </div>
    </header>
  );
}
