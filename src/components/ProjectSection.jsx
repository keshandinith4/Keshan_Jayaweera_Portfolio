import React, { useState } from "react";
import { motion } from "framer-motion";
import project1 from "../assets/images/project1.png";

const projects = [
  {
    id: 4,
    title: "Dyes and Thread-Web",
    image: project1,
    description: "React | MongoDB | Express | Node",
  },
  {
    id: 3,
    title: "Inventory Management System-TOYO Cable",
    image: null,
    description: "C# | .NET",
  },
  {
    id: 2,
    title: "Mobile App with React Native",
    image: null,
    description: "React Native | Firebase",
  },
  {
    id: 1,
    title: "E-Commerce Platform",
    image: null,
    description: "MERN Stack | Stripe | Cloudinary",
  },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  // Animation Variants
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="Projects" className="scroll-smooth">
      <div className="w-full h-auto bg-[#121828]  py-3 xl:py-16 px-6 md:px-16 text-white">
        <div className="text-left mb-1 xl:mt-20">
        <motion.h2 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="font-bold text-3xl text-[#19C753] lg:text-5xl">Projects
        </motion.h2>
      </div>

        {/* Project Grid */}
        <motion.div
          key={visibleProjects.length}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid gap-10 justify-center transition duration-300 mt-10 grid-cols-2 lg:grid-cols-3"
        >
          {visibleProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-[#182034] rounded-2xl overflow-hidden shadow-md border border-[#19C753]/30 hover:border-[#19C753] transition-all duration-300"
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                />
              ) : (
                <div className="h-auto w-full bg-[#0f1422] flex items-center justify-center text-gray-400 italic">
                  No Image Available
                </div>
              )}
              <div className="p-1 text-center lg:p-3">
                <h3 className="font-semibold text-xs xl:text-xl">{project.title}</h3>
                <h4 className="text-xs text-[#19C753] font-normal lg:text-base xl:text-lg">
                  {project.description}
                </h4>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mt-10 text-xs lg:text-base"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-[#19C753] hover:bg-green-600 text-white px-2 py-1 md:px-8 md:py-3 rounded-full font-medium transition duration-300"
          >
            {showAll ? "Show Less" : "See More"}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
