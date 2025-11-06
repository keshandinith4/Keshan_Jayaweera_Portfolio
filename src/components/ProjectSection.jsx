import React, { useState } from "react";
import project1 from "../assets/images/project1.png";

const projects = [
  {
    id: 1,
    title: "Dyes and Thread-Web",
    image: project1,
    description: "React | MongoDB | Express | Node",
  },
  {
    id: 2,
    title: "Full-Stack Development (MERN)",
    image: null,
    description: "Issued by Cisco",
  },
  {
    id: 3,
    title: "Mobile App with React Native",
    image: null,
    description: "Issued by Cisco",
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    image: null,
    description: "Issued by Cisco",
  },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="Projects" className="scroll-smooth">
      <div className="w-full h-auto bg-[#121828] py-16 px-4 text-white">
        <h1 className="pl-16 text-4xl md:text-5xl font-bold text-left mb-10 text-[#19C753]">
          Projects
        </h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center transition duration-300">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#182034] rounded-2xl overflow-hidden shadow-md hover:scale-105 transition-transform"
            >
              <div className="border p-2 rounded-2xl border-[#19C753]/30 hover:border-[#19C753] transition duration-300">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.description}`}
                  className="h-auto w-full object-cover text-center"
                />
                <div className="p-1">
                  <h3 className="font-semibold text-lg text-center">
                    {project.title}
                  </h3>
                  <h4 className="font-semibold text-medium text-center text-[#19C753]">
                    {project.description}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-[#19C753] hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition duration-300"
          >
            {showAll ? "Show Less" : "See More"}
          </button>
        </div>
      </div>
    </section>
  );
}
