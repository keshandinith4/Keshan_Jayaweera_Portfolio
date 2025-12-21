import React from "react";
import { FaPaperPlane, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import Keshansq from "../assets/images/Keshansq.jpg";

export default function Contact_Me() {
  return (
    <section id="Contact_Me" className="scroll-smooth">
      <div className="bg-[#121828] flex flex-col justify-center items-center text-white px-4 py-5 md:py-12">
        
        {/* Section Title */}
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#19C753] mb-5 text-left lg:text-center md:text-left w-full max-w-5xl xl:mt-5"
        >
          Contact Me
        </motion.h1>

        {/* Container */}
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl w-full items-center justify-center ">

          {/* Left Image Section */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-[#1A2238] w-full md:w-1/2 rounded-2xl shadow-lg border border-[#19C753]/30 hover:border-[#19C753] transition duration-300 overflow-hidden relative xl:h-120 xl:w-100"
          >
            <img
              src={Keshansq}
              alt="contact"
              className="object-cover w-full h-auto rounded-2xl xl:h-120 xl:w-100"
            />

            {/* Social Links */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-8 text-3xl sm:text-4xl bg-black/40 backdrop-blur-md py-3 rounded-b-2xl">
              <a href="https://www.linkedin.com/in/oyage-linkedin-keshandinith4" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="transition duration-300 hover:text-[#19C753] hover:scale-110 cursor-pointer" />
              </a>
              <a href="https://github.com/oyage-github-keshandinith4" target="_blank" rel="noopener noreferrer">
                <FaGithub className="transition duration-300 hover:text-[#19C753] hover:scale-110 cursor-pointer" />
              </a>
              <a href="mailto:keshandinith4@gmail.com" target="_blank" rel="noopener noreferrer">
                <MdEmail className="transition duration-300 hover:text-[#19C753] hover:scale-110 cursor-pointer" />
              </a>
              <a href="https://wa.me/94719943746" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="transition duration-300 hover:text-[#19C753] hover:scale-110 cursor-pointer" />
              </a>
            </div>
          </motion.div>

          {/* Right Form Section */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-[#1A2238] w-full md:w-1/2 rounded-2xl shadow-lg border border-[#19C753]/30 hover:border-[#19C753] transition duration-300"
          >
            <div className="flex-1 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg">
              <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center xl:text-3xl">
                Ready To Transform Your Ideas?
              </h2>

              <form className="space-y-6">
                {/* Name & Email */}
                <div className="flex flex-col md:flex-row gap-4 lg:gap-6">
                  <div className="flex-1">
                    <label className="block font-semibold mb-2 text-sm sm:text-base lg:text-lg">Name:</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-4 py-2 rounded-lg bg-transparent border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#19C753] placeholder-gray-400"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block font-semibold mb-2 text-sm sm:text-base lg:text-lg">Email:</label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 rounded-lg bg-transparent border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#19C753] placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-semibold mb-2 text-sm sm:text-base lg:text-lg">Message:</label>
                  <textarea
                    rows="5"
                    placeholder="Enter your message"
                    className="w-full px-4 py-2 rounded-lg bg-transparent border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#19C753] placeholder-gray-400 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full bg-[#19C753] hover:bg-green-600 text-white font-semibold py-3 px-10 rounded-full transition-all flex flex-row items-center justify-center gap-2 whitespace-nowrap lg:text-lg"
                  >
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
