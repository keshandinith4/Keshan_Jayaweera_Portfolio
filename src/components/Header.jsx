import { Link } from "react-router-dom";

export default function Header() {
  return (
     <header className="flex items-center justify-between px-10 py-4 bg-[#121828] text-white relative overflow-hidden">
      {/* Left Side Background Shape */}
      <div className="absolute left-0 top-0 h-full w-3/5 bg-gray-300 -skew-x-12 origin-top-left"></div>

      {/* Name */}
      <div className="relative z-10 flex items-center">
        <span className="font-bold text-[#121828] text-3xl ml-8">Keshan Jayaweera</span>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center gap-15 text-lg font-semibold">
        <a href="#Home" className="text-[#19C753] font-semibold transition duration-300 hover:bg-[#19C753] hover:text-[#ffff] rounded-full px-5 py-1.5">
          Home
        </a>
        <a href="#About_Us" className="text-[#19C753] font-semibold transition duration-300 hover:bg-[#19C753] hover:text-[#ffff] rounded-full px-5 py-1.5">
          About Us
        </a>
        <a href="#Projects" className="text-[#19C753] font-semibold transition duration-300 hover:bg-[#19C753] hover:text-[#ffff] rounded-full px-5 py-1.5">
          Projects
        </a>
        <a
          href="#Contact_Me"
          className="bg-white text-[#19C753] px-5 py-1.5 rounded-full font-semibold transition duration-300 hover:bg-[#19C753] hover:text-[#ffff]">
          CONTACT ME
       </a>
      </nav>
    </header>
  );
}
