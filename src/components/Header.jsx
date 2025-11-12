import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const sections = [
    { label: "Home", href: "#Home" },
    { label: "About Me", href: "#About_Me" },
    { label: "Projects", href: "#Projects" },
    { label: "Certificates", href: "#Certificates" },
    { label: "Contact Me", href: "#Contact_Me", special: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let current = "Home";
      sections.forEach((section) => {
        const element = document.querySelector(section.href);
        if (element) {
          const offsetTop = element.offsetTop;
          if (scrollPosition >= offsetTop) {
            current = section.label;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 sm:px-10 py-4 bg-[#121828] shadow-md text-white">
      {/* Background shape */}
      <div
        className="absolute left-0 top-0 h-full bg-gray-300 -skew-x-12 origin-top-left"
        style={{ width: "54.5%" }}
      ></div>

      {/* Name / Logo */}
      <div className="relative z-10 flex items-center">
        <span className="font-bold text-[#121828] text-xl sm:text-2xl md:text-3xl ml-4 sm:ml-8 hover:text-[#19C753] transition duration-300 cursor-pointer">
          Keshan Jayaweera
        </span>
      </div>

      {/* Desktop Nav */}
      <nav className="relative z-10 hidden md:flex items-center gap-4 text-sm md:text-base font-semibold">
        {sections.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            className={`hover:scale-105 transition duration-300 rounded-full px-4 py-1.5 ${
              item.label === activeSection
                ? "bg-[#19C753] text-white"
                : item.special
                ? "bg-white text-[#19C753] hover:bg-[#19C753] hover:text-white"
                : "text-[#19C753] hover:bg-[#19C753] hover:text-white"
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="relative z-10 md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-[#121828] flex flex-col items-center gap-3 py-4 md:hidden">
          {sections.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className={`hover:scale-105 transition duration-300 rounded-full px-5 py-2 ${
                item.label === activeSection
                  ? "bg-[#19C753] text-white"
                  : item.special
                  ? "bg-white text-[#19C753] hover:bg-[#19C753] hover:text-white"
                  : "text-[#19C753] hover:bg-[#19C753] hover:text-white"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
