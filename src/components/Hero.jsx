import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  
  return (
    <section id="Home" className="scroll-smooth">
      <div className="relative flex items-center bg-[#121828] justify-between min-h-screen overflow-hidden">

      {/* Angled Divider */}
        <div className="absolute left-0 -mt-18 top-0 h-full w-5/9 bg-gray-300 -skew-x-12 origin-top-left"></div>
      {/* Left Side */}
    
      <div className="w-1/2 flex flex-col justify-center px-20 -mt-19 relative z-10">
        <h2 className="mb-8 text-xl animate-popup">Web Application Developer</h2>
        <h3 className="text-3xl mb-2 text-black">Hi, I am</h3>
        <h1 className="text-5xl font-bold mb-3 text-[#19C753] hover:scale-101 transition duration-300">Keshan Jayaweera</h1>
        <p className="text-gray-600 font-medium mb-8 text-xl hover:text-gray-800 transition duration-200">
          IT Student / Undergraduate / Full Stack Developer
        </p>
        <p className="text-[#121828] text-lg transition duration-300">
          Passionate IT student with expertise in multiple programming languages and core computer science concepts, eager to apply technical skills in real-world projects and collaborative development environments.
        </p>

      <div className="flex gap-8 text-4xl mt-5">
        <a href="https://www.linkedin.com/in/oyage-linkedin-keshandinith4" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="transition duration-300 hover:text-[#19C753] hover:scale-110 cursor-pointer" />
        </a>

        <a href="https://github.com/oyage-github-keshandinith4" target="_blank" rel="noopener noreferrer">
          <FaGithub className="transition duration-300 hover:text-[#19C753] hover:scale-110 cursor-pointer" />
        </a>

        <a href="https://facebook.com/oyage-facebook-username" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="transition duration-300 hover:text-[#19C753] hover:scale-110 cursor-pointer" />
        </a>

        <a href="https://wa.me/94719943746" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="transition duration-300 hover:text-[#19C753] hover:scale-110 cursor-pointer" />
        </a>
      </div>

      </div>

      {/* Right Side */}
      <div className="relative w-1/2 flex justify-end items-center">

        {/* Profile Image */}
        <img
          src="https://nyc.cloud.appwrite.io/v1/storage/buckets/68fc4ffc0029fa78be44/files/68fc52d50022c543682d/view?project=68fc4f79002e7fc2874a&mode=admin.jpg"
          alt="Profile"
          className="relative z-10  max-w-lg object-contain"
        />
      </div>
    </div>
    </section>
  );
}
