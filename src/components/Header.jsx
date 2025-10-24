import { Link } from "react-router-dom";

export default function Header() {
  return (
     <header className="flex items-center justify-between px-10 py-4 bg-black text-white relative overflow-hidden">
      {/* Left Side Background Shape */}
      <div className="absolute left-4 top-0 h-full w-1/2 bg-gray-300 -skew-x-12 origin-top-left"></div>

      {/* Name */}
      <div className="relative z-10 flex items-center">
        <span className="font-bold text-[#000000] text-2xl"></span>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center gap-15 text-lg font-semibold">
        <a href="#about" className="hover:text-gray-300">
          Home
        </a>
        <a href="#skills" className="hover:text-gray-300">
          About Us
        </a>
        <a href="#portfolio" className="hover:text-gray-300">
          Projects
        </a>
        <a
          href="#contact"
          className="bg-white text-black px-5 py-1.5 rounded-full font-medium hover:bg-gray-200 transition">
          CONTACT ME
        </a>
      </nav>
    </header>
  );
}
