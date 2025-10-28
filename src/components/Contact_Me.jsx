import React from "react";

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
                  className="w-full px-4 py-2 rounded-lg bg-transparent border border-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-400"
                />
              </div>

              <div className="flex-1">
                <label className="block font-semibold mb-2">Email:</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg bg-transparent border border-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block font-semibold mb-2">Message:</label>
              <textarea
                rows="5"
                placeholder="Enter your message"
                className="w-full px-4 py-2 rounded-lg bg-transparent border border-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-400"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-38 rounded-full transition-all flex items-center justify-center gap-2 mx-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 12V10"
                  />
                </svg>
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