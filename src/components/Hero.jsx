import React from "react";
import { HiArrowSmDown } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Hero() {
  const handleDownloadCV = async () => {
    const cvUrl = "/H.D.K.S.Jayaweera_CV.pdf";
    const fileName = "H.D.K.S.Jayaweera_CV.pdf";

    try {
      const res = await fetch(cvUrl, { cache: "no-store" });
      if (!res.ok) throw new Error("Failed to fetch file");
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      window.open(cvUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="Home" className="scroll-smooth">
      <div className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen w-full bg-[#121828] overflow-hidden">
        {/* Angled Divider (Left Shape) - Hidden on mobile, visible on lg screens */}
        <div
          className="absolute left-0 top-0 h-full bg-gray-300 -skew-x-12 origin-top-left hidden lg:block"
          style={{ width: "55%" }}
        ></div>

        {/* Left Side - Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-8 lg:py-24 text-center lg:text-left relative z-10">
          <h2 className="mb-4 text-base sm:text-lg lg:text-2xl text-white lg:text-gray-800 animate-popup font-semibold">
            Web Application Developer
          </h2>

          <h3 className="text-lg sm:text-xl lg:text-3xl mb-2 text-gray-300 lg:text-black">
            Hi, I am
          </h3>

          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-3 text-[#19C753] hover:scale-105 transition duration-300 cursor-pointer">
            Keshan Jayaweera
          </h1>

          <p className="text-sm sm:text-base lg:text-xl text-gray-300 lg:text-gray-700 font-medium mb-6 hover:text-white lg:hover:text-gray-900 transition duration-200">
            IT Student / Undergraduate / Full Stack Developer
          </p>

          <p className="text-xs sm:text-sm lg:text-lg text-gray-400 lg:text-[#121828] max-w-2xl mx-auto lg:mx-0 transition duration-300 leading-relaxed mb-8">
            Passionate IT student with expertise in multiple programming
            languages and core computer science concepts, eager to apply
            technical skills in real-world projects and collaborative
            development environments.
          </p>

            {/* Mobile: Image First */}
            <div className="w-full flex justify-center items-center pb-5 px-4 lg:hidden relative z-10">
              <img
                src="https://nyc.cloud.appwrite.io/v1/storage/buckets/68fc4ffc0029fa78be44/files/69481876002e4c58c6df/view?project=68fc4f79002e7fc2874a&mode=admin.png"
                alt="Profile"
                className="max-w-[280px] sm:max-w-xs object-contain"
              />
            </div>

          {/* Buttons Container */}
            <div className="flex flex-row justify-center lg:justify-start gap-3 sm:gap-4 mb-6">
              {/* Download CV Button */}
              <button
                onClick={handleDownloadCV}
                className="flex items-center justify-center gap-2 px-4 py-2.5 flex-1 sm:flex-initial sm:w-auto sm:min-w-[160px] bg-[#19C753] lg:bg-[#121828] text-white font-semibold rounded-lg shadow hover:bg-[#121828] lg:hover:bg-[#19C753] transition text-sm duration-300"
              >
                <HiArrowSmDown className="text-lg" />
                <span>Download CV</span>
              </button>

              {/* Download Cover Letter Button */}
              <button
                onClick={handleDownloadCV}
                className="flex items-center justify-center gap-2 px-4 py-2.5 flex-1 sm:flex-initial sm:w-auto sm:min-w-[160px] bg-[#19C753] lg:bg-[#121828] text-white font-semibold rounded-lg shadow hover:bg-[#121828] lg:hover:bg-[#19C753] transition text-sm duration-300"
              >
                <HiArrowSmDown className="text-lg" />
                <span>Cover Letter</span>
              </button>
            </div>

          {/* Social Icons Container */}
          <div className="flex justify-center lg:justify-start gap-6 sm:gap-8 text-4xl sm:text-4xl lg:text-5xl xl:gap-12 text-white lg:text-gray-800">
            <a
              href="linkedin.com/in/keshan-jayaweera-0b120a265"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:text-[#19C753] hover:scale-110 cursor-pointer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/keshandinith4"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:text-[#19C753] hover:scale-110 cursor-pointer"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:keshandinith4@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:text-[#19C753] hover:scale-110 cursor-pointer"
            >
              <MdEmail />
            </a>
            <a
              href="https://wa.me/+94719943746"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:text-[#19C753] hover:scale-110 cursor-pointer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Right Side - Desktop Image Only */}
        <div className="hidden lg:flex relative w-full lg:w-1/2 justify-center lg:justify-end items-center px-4">
          <img
            src="https://nyc.cloud.appwrite.io/v1/storage/buckets/68fc4ffc0029fa78be44/files/69481876002e4c58c6df/view?project=68fc4f79002e7fc2874a&mode=admin.png"
            alt="Profile"
            className="relative z-10 max-w-xs sm:max-w-sm md:max-w-md lg:max-w object-contain xl:mt-25"
          />
        </div>
      </div>
    </section>
  );
}