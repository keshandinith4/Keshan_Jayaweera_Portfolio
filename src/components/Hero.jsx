import React from "react";
import { HiArrowSmDown } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import my from "../assets/images/my.png";

export default function Hero() {
  return (
    <section id="home" className="scroll-smooth">
      <div className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen w-full bg-[#121828] overflow-hidden">

        {/* Left Shape */}
        <div
          className="absolute left-0 top-0 h-full bg-gray-300 -skew-x-12 origin-top-left hidden lg:block"
          style={{ width: "55%" }}
        />

        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-10 lg:py-24 text-center lg:text-left relative z-10">

          <h2 className="mb-4 text-base sm:text-lg lg:text-2xl text-white lg:text-gray-800 font-semibold">
            Web Application Developer
          </h2>

          <h3 className="text-lg sm:text-xl lg:text-3xl mb-2 text-gray-300 lg:text-black">
            Hi, I am
          </h3>

          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-3 text-[#19C753] hover:scale-105 transition duration-300 cursor-pointer">
            Keshan Jayaweera
          </h1>

          <p className="text-sm sm:text-base lg:text-xl text-gray-300 lg:text-gray-700 font-medium mb-6">
            IT Student / Undergraduate / Full Stack Developer
          </p>

          <p className="text-xs sm:text-sm lg:text-lg text-gray-400 lg:text-[#121828] max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
            Passionate IT student with expertise in multiple programming
            languages and core computer science concepts, eager to apply
            technical skills in real-world projects and collaborative
            development environments.
          </p>

          {/* Buttons */}
          <div className="flex justify-center lg:justify-start mb-6">
            <a
              href="/Keshan%20Jayaweera%20-%20CV.pdf"
              download
              className="flex items-center gap-2 px-5 py-2.5 bg-[#19C753] lg:bg-[#121828] text-white font-semibold rounded-lg shadow hover:bg-[#121828] lg:hover:bg-[#19C753] transition duration-300 text-sm"
            >
              <HiArrowSmDown className="text-lg" />
              Download CV
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start gap-6 text-4xl lg:text-5xl text-white lg:text-gray-800">
            <a
              href="https://www.linkedin.com/in/keshan-jayaweera-0b120a265"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:text-[#19C753] hover:scale-110"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/keshandinith4"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:text-[#19C753] hover:scale-110"
            >
              <FaGithub />
            </a>

            <a
              href="mailto:keshandinith4@gmail.com"
              className="transition duration-300 hover:text-[#19C753] hover:scale-110"
            >
              <MdEmail />
            </a>

            <a
              href="https://wa.me/94719943746"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:text-[#19C753] hover:scale-110"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden lg:flex relative w-full lg:w-1/2 justify-center items-center px-4">
          <img
            src={my}
            alt="Profile"
            className="relative z-10 max-w-sm object-contain"
          />
        </div>

      </div>
    </section>
  );
}