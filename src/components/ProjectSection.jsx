import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Dyes and Thread-Web",
    image: "/images/aspnet-core.png",
    discription:"React | MongoDB | Express | Node",
  },
  {
    id: 2,
    title: "Full-Stack Development (MERN)",
    image: "/images/mern.png",
    discription:"Issued by Cisco",
  },
  {
    id: 3,
    title: "Mobile App with React Native",
    image: "/images/react-native.png",
    discription:"Issued by Cisco",
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    image: "/images/ecommerce.png",
    discription:"Issued by Cisco",
  },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="Projects" className="scroll-smooth">
      <div className="bg-[#121828] py-15 px-1 text-white">
        <h1 className="pl-15 text-4xl md:text-5xl font-bold text-left mb-10 text-[#19C753] w-full">
          Projects
        </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center px-15 transition duration-300">
        {visibleProjects.map((project) => (
          <div
            key={project.id}
            className="bg-[#182034] rounded-2xl overflow-hidden shadow-md hover:scale-105 transition-transform">
            <img
                src={projects.image}
                alt={`${projects.title} - ${projects.description}`}
                className="h-70 w-full object-cover text-center"/>
            <div className="p-4">
              <h3 className="font-semibold text-lg text-center">{project.title}</h3>
              <h4 className="font-semibold text-medium text-center text-[#19C753]">{project.discription}</h4>
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
