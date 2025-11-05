import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="Home" className="scroll-smooth">
      <div className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen w-full bg-[#121828] overflow-hidden">
        
        {/* Angled Divider (Left Shape) */}
        <div
          className="absolute left-0 top-0 h-full bg-gray-300 -skew-x-12 origin-top-left hidden md:block"
          style={{ width: "55%" }}
        ></div>

        {/* Left Side */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-24 text-center lg:text-left relative z-10">
          <h2 className="mb-4 text-fluid-md text-gray-800 animate-popup">
            Web Application Developer
          </h2>
          <h3 className="text-fluid-lg mb-2 text-black">Hi, I am</h3>
          <h1 className="text-fluid-xl font-bold mb-3 text-[#19C753] hover:scale-105 transition duration-300">
            Keshan Jayaweera
          </h1>
          <p className="text-gray-700 font-medium mb-6 text-fluid-md hover:text-gray-900 transition duration-200">
            IT Student / Undergraduate / Full Stack Developer
          </p>
          <p className="text-[#121828] text-fluid-sm max-w-2xl mx-auto lg:mx-0 transition duration-300 leading-relaxed">
            Passionate IT student with expertise in multiple programming
            languages and core computer science concepts, eager to apply
            technical skills in real-world projects and collaborative
            development environments.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start gap-6 text-3xl mt-8">
            <a
              href="https://www.linkedin.com/in/oyage-linkedin-keshandinith4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="transition duration-300 hover:text-[#19C753] hover:scale-110 cursor-pointer" />
            </a>

            <a
              href="https://github.com/oyage-github-keshandinith4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="transition duration-300 hover:text-[#19C753] hover:scale-110 cursor-pointer" />
            </a>

            <a
              href="https://facebook.com/oyage-facebook-username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="transition duration-300 hover:text-[#19C753] hover:scale-110 cursor-pointer" />
            </a>

            <a
              href="https://wa.me/94719943746"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="transition duration-300 hover:text-[#19C753] hover:scale-110 cursor-pointer" />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end items-center mt-10 lg:mt-0 px-4">
          <img
            src="https://nyc.cloud.appwrite.io/v1/storage/buckets/68fc4ffc0029fa78be44/files/68fc52d50022c543682d/view?project=68fc4f79002e7fc2874a&mode=admin.jpg"
            alt="Profile"
            className="relative z-10 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
}
