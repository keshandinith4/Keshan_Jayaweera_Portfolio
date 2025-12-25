import React, { useState } from "react";
import { motion } from "framer-motion";
import project1 from "../assets/images/project1.png";

// Mock project data with full details
const projectsData = [
  {
    id: 2,
    title: "Dyes and Thread-Web",
    image: project1,
    description: "React | MongoDB | Express | Node",
    fullDescription: "A MERN stack web application designed for a batik textile business that allows customers to place and customize orders online, while enabling real-time management of dyes and thread inventory. The system includes order tracking, customer feedback, and an analytics dashboard to improve operational efficiency and customer satisfaction.",
    technologies: ["React", "MongoDB", "Express.js", "Node.js", "Tailwind CSS"],
    features: [
      "Real-time inventory management",
      "Online batik product browsing & ordering",
      "Admin dashboard for order & stock management",
      "Customer feedback & review system",
      "Implemented full CRUD operations",
      "Responsive design for all devices"
    ],
    github: "https://github.com/keshandinith4/Dyes_And_Thread",
    liveDemo: "https://dyes-thread-web.com",
    duration: "Ongoing",
    role: "Full Stack Developer"
  },
  {
    id: 1,
    title: "RABBIT TOURS",
    image: "https://nyc.cloud.appwrite.io/v1/storage/buckets/68fc4ffc0029fa78be44/files/694b95e4000c439d7071/view?project=68fc4f79002e7fc2874a&mode=admin.png",
    description: "React | MongoDB | Express | Node | Bootstrap",
    fullDescription: "A React-based tourism web application developed by converting a Bootstrap template into a fully functional system. The platform allows customers to explore Sri Lanka tour destinations, book tour packages, and share feedback, while enabling administrators and drivers to manage tours, locations, and images through a complete CRUD system.",
    technologies: ["React", "MongoDB", "Express.js", "Node.js", "Tailwind CSS", "Bootstrap"],
    features: [
      "Browse and book Sri Lanka tour packages",
      "Tour package management (CRUD)",
      "Separate tour categories & packages",
      "Customer feedback & review system",
      "Location-based tour listings",
      "Admin panel for managing tours & bookings",
      "Fully mobile responsive design compatible with smartphones, tablets, and desktops"
    ],
    github: "https://github.com/keshandinith4/Rabbit-Tourism-Backend",
    liveDemo: null,
    duration: "Ongoing",
    role: "Backend Developer"
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen size
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Show 2 on mobile (initially or all), show 3 initially or all on desktop
  const visibleProjects = isMobile 
    ? (showAll ? projectsData : projectsData.slice(0, 2))
    : (showAll ? projectsData : projectsData.slice(0, 3));

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

  if (selectedProject) {
    return <ProjectDetailView project={selectedProject} onBack={() => setSelectedProject(null)} />;
  }

  return (
    <section id="Projects" className="scroll-smooth">
      <div className="w-full h-auto bg-[#121828] py-3 px-6 text-white text-sm md:text-sm lg:text-lg md:px-16">
        <div className="text-left mb-1 xl:mt-20">
          <motion.h2 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="font-bold text-3xl text-[#19C753] lg:text-5xl"
          >
            Projects
          </motion.h2>
        </div>

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
              onClick={() => setSelectedProject(project)}
              className="bg-[#182034] rounded-2xl overflow-hidden shadow-md border border-[#19C753]/30 hover:border-[#19C753] transition-all duration-300 cursor-pointer"
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                />
              ) : (
                <div className="h-48 w-full bg-[#0f1422] flex items-center justify-center text-gray-400 italic">
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

function ProjectDetailView({ project, onBack }) {
  return (
    <div className="w-full min-h-screen bg-[#121828] text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto px-6 md:px-16 py-10"
      >
        {/* Back Button */}
        <motion.button
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          onClick={onBack}
          className="flex items-center gap-2 text-[#19C753] hover:text-green-400 mb-8 transition"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </motion.button>

        {/* Project Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-[#19C753] text-xl mb-6">{project.description}</p>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-10"
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover rounded-2xl shadow-2xl"
            />
          ) : (
            <div className="w-full h-96 bg-[#182034] rounded-2xl shadow-2xl flex items-center justify-center border border-[#19C753]/30">
              <span className="text-gray-400 text-xl italic">No Image Available</span>
            </div>
          )}
        </motion.div>

        {/* Project Details Grid */}
        <div className="grid md:grid-cols-2 gap-10 mb-10">
          {/* Left Column */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-[#182034] rounded-2xl p-6 border border-[#19C753]/30 mb-6">
              <h2 className="text-2xl font-semibold mb-4 text-[#19C753]">Overview</h2>
              <p className="text-gray-300 leading-relaxed">{project.fullDescription}</p>
            </div>

            <div className="bg-[#182034] rounded-2xl p-6 border border-[#19C753]/30">
              <h2 className="text-2xl font-semibold mb-4 text-[#19C753]">Project Info</h2>
              <div className="space-y-3">
                <div>
                  <span className="text-gray-400">Duration:</span>
                  <span className="ml-2 font-medium">{project.duration}</span>
                </div>
                <div>
                  <span className="text-gray-400">Role:</span>
                  <span className="ml-2 font-medium">{project.role}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-[#182034] rounded-2xl p-6 border border-[#19C753]/30 mb-6">
              <h2 className="text-2xl font-semibold mb-4 text-[#19C753]">Technologies</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-[#19C753]/20 text-[#19C753] px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#182034] rounded-2xl p-6 border border-[#19C753]/30">
              <h2 className="text-2xl font-semibold mb-4 text-[#19C753]">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#19C753] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Links */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#182034] hover:bg-[#1f2937] border border-[#19C753]/30 hover:border-[#19C753] text-white px-8 py-3 rounded-full font-medium transition duration-300 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#19C753] hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium transition duration-300 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}