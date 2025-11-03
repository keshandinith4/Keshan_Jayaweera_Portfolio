import React, { useState } from "react";

const certificates = [
  {
    id: 1,
    title: "ASP.NET Core Web API Development",
    image: "/images/aspnet-core.png",
  },
  {
    id: 2,
    title: "Full-Stack Development (MERN)",
    image: "/images/mern.png",
  },
  {
    id: 3,
    title: "Mobile App with React Native",
    image: "/images/react-native.png",
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    image: "/images/ecommerce.png",
  },
];

export default function Certificates() {
  const [showAll, setShowAll] = useState(false);

  const visibleCertificates = showAll ? certificates : certificates.slice(0, 3);

  return (
    <section id="Certificates" className="scroll-smooth">
      <div className="bg-[#121828] py-15 px-1 text-white">
        <h1 className="pl-15 text-4xl md:text-5xl font-bold text-left mb-10 text-[#19C753] w-full">
          Certificates
        </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center px-15 transition duration-300">
        {visibleCertificates.map((certificate) => (
          <div
            key={certificate.id}
            className="bg-[#1B2333] rounded-2xl overflow-hidden shadow-md hover:scale-105 transition-transform">
            <img
              src={certificate.image}
              alt={certificate.title}
              className="h-48 w-full object-cover"/>
            <div className="p-4">
              <h3 className="font-semibold text-lg">{certificate.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-[#19C753] hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors font-medium transition duration-300">
          {showAll ? "Show Less" : "See More"}
        </button>
      </div>
    </div>
    </section>
  );
}
