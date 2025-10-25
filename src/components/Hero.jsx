import React from "react";

export default function Hero() {
  

  return (
    <section className="relative flex items-center bg-black justify-between min-h-screen overflow-hidden">

      {/* Angled Divider */}
        <div className="absolute left-0 -mt-18 top-0 h-full w-1/2 bg-gray-300 -skew-x-12 origin-top-left"></div>
      {/* Left Side */}
      <div className="w-1/2 flex flex-col justify-center px-20 py-32 mt-50 relative z-10">
        <h3 className="text-3xl mb-2 text-black">Hi, I am</h3>
        <h1 className="text-7xl font-bold mb-3 text-[#004D40]">Keshan Jayaweera</h1>
        <p className="text-gray-600 font-medium mb-8 text-xl">
          IT Student / Undergraduate / Front-end Designer
        </p>
      </div>

      {/* Right Side */}
      <div className="relative w-1/2 flex justify-end items-center">

        {/* Profile Image */}
        <img
          src="/profile.png" // <-- replace with your own image path
          alt="Profile"
          className="relative z-10 w-[80%] max-w-md object-contain"
        />
      </div>
    </section>
  );
}
