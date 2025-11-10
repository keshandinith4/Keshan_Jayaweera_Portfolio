import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import Keshansq from "../assets/images/Keshansq.jpg";

export default function Contact_Me() {
  return (
    <section id="Contact_Me" className="scroll-smooth">
      <div className="bg-[#121828] flex flex-col h-auto w-full justify-center items-center min-h-screen text-white px-4 py-12">
        
        {/* Section Title */}
        <motion.h1 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          className="text-4xl md:text-5xl font-bold mt-5 mr-240 text-[#19C753] text-left">
          Contact Me
        </motion.h1>

        <div className="flex flex-col md:flex-row gap-8 max-w-5xl w-full p-6">
          
          {/* Left Image Section */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-[#1A2238] w-full lg:w-1/2 rounded-2xl shadow-lg border border-[#19C753]/30 hover:border-[#19C753] transition duration-300 overflow-hidden relative"
          >
            <img
              src={Keshansq}
              alt="contact"
              className="object-cover w-full h-[450px] rounded-2xl"
            />

            {/* Social Links Overlay */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-8 text-4xl bg-black/30 backdrop-blur-md py-3 rounded-b-2xl">
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
                href="https://wa.me/94719943746"
                target="_blank"
                rel="noopener noreferrer"
              >
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
            className="bg-[#1A2238] w-full lg:w-1/2 rounded-2xl shadow-lg border border-[#19C753]/30 hover:border-[#19C753] transition duration-300"
          >
            <div className="flex-1 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold mb-6 text-center">
                Ready To Transform Your Ideas?
              </h2>

              <form className="space-y-6">
                {/* Name & Email */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <label className="block font-semibold mb-2">Name:</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-4 py-2 rounded-lg bg-transparent border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#19C753] placeholder-gray-400"
                    />
                  </div>

                  <div className="flex-1">
                    <label className="block font-semibold mb-2">Email:</label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 rounded-lg bg-transparent border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#19C753] placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-semibold mb-2">Message:</label>
                  <textarea
                    rows="5"
                    placeholder="Enter your message"
                    className="w-full px-4 py-2 rounded-lg bg-transparent border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#19C753] placeholder-gray-400"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full bg-[#19C753] hover:bg-green-600 text-white font-semibold py-3 px-10 rounded-full transition-all flex flex-row items-center justify-center gap-2 whitespace-nowrap"
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
