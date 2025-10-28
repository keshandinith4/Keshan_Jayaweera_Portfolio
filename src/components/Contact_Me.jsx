import React from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact_Me() {
  return (
    <section id = "Contact_Me" className="scroll-smooth">
        <div className="bg-[#121828] flex justify-center items-center min-h-screen text-white px-4">
      <div className="flex flex-col md:flex-row gap-6 max-w-5xl w-full p-6">

        {/* Left Image Section */}
        <div className="flex-1 bg-gradient-to-br from-gray-700 -gray-800 rounded-2xl overflow-hidden">
          <imgto
            src="https://via.placeholder.com/600x400"
            alt="contact"
            className="w-full h-full object-cover opacity-70"
          />
        </div>

        {/* Right Form Section */}
        <div className="flex-1 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
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
                className="w-full md:w-auto bg-[#19C753] hover:bg-green-600 text-white font-semibold py-3 px-38 rounded-full transition-all flex items-center justify-center gap-2 mx-auto"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </section>
  )
}