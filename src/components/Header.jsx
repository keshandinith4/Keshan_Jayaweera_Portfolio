import { Link } from "react-router-dom";

export default function Header() {  

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-4 bg-[#121828] shadow-md text-white overflow-hidden">
      {/* Left Side Background Shape */}
      <div className="absolute left-0 top-0 h-full w-6/11 bg-gray-300 -skew-x-12 origin-top-left"></div>

      {/* Name */}
      <div className="relative z-10 flex items-center">
        <span className="font-bold text-[#121828] text-3xl ml-8 hover:text-[#19C753] hover:scale-101 transition duration-300">Keshan Jayaweera</span>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center gap-3 text-medium font-semibold">
        <a href="#Home" className="hover:scale-101 text-[#19C753] font-semibold transition duration-300 hover:bg-[#19C753] hover:text-[#ffff] rounded-full px-5 py-1.5">
          Home
        </a>
        <a href="#About_Us" className="hover:scale-101 text-[#19C753] font-semibold transition duration-300 hover:bg-[#19C753] hover:text-[#ffff] rounded-full px-5 py-1.5">
          About Us
        </a>
        <a href="#Projects" className="hover:scale-101 text-[#19C753] font-semibold transition duration-300 hover:bg-[#19C753] hover:text-[#ffff] rounded-full px-5 py-1.5">
          Projects
        </a>
        <a href="#Certificates" className="hover:scale-101 text-[#19C753] font-semibold transition duration-300 hover:bg-[#19C753] hover:text-[#ffff] rounded-full px-5 py-1.5">
          Certificates
        </a>
        <a
          href="#Contact_Me"
          className="hover:scale-101 bg-white text-[#19C753] px-3 py-1.5 rounded-full font-semibold transition duration-300 hover:bg-[#19C753] hover:text-[#ffff]">
          Contact Me
       </a>
      </nav>
    </header>
  );
}