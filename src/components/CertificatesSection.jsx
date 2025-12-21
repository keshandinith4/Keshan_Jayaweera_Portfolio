import React, { useState } from "react";
import { motion } from "framer-motion";

const certificates = [
  {
    id: 1,
    title: "Front-End Web Development",
    discription: "Issued by University of Moratuwa",
    image:
      "https://nyc.cloud.appwrite.io/v1/storage/buckets/68fc4ffc0029fa78be44/files/69084f50000a04ff245f/view?project=68fc4f79002e7fc2874a&mode=admin",
  },
  {
    id: 2,
    title: "Machine Learning I",
    discription: "Issued by Columbia+ University in the city of NewYork",
    image:
      "https://nyc.cloud.appwrite.io/v1/storage/buckets/68fc4ffc0029fa78be44/files/69085221001f87ff9560/view?project=68fc4f79002e7fc2874a&mode=admin",
  },
  {
    id: 3,
    title: "Computer Hardware Basics",
    discription: "Issued by Cisco",
    image:
      "https://nyc.cloud.appwrite.io/v1/storage/buckets/68fc4ffc0029fa78be44/files/690853cc002d90f10a64/view?project=68fc4f79002e7fc2874a&mode=admin",
  },
  {
    id: 4,
    title: "Introduction to Data Science",
    discription: "Issued by Cisco",
    image:
      "https://nyc.cloud.appwrite.io/v1/storage/buckets/68fc4ffc0029fa78be44/files/690854b800239a79cdb7/view?project=68fc4f79002e7fc2874a&mode=admin",
  },
];

export default function Certificates() {
  const [showAll, setShowAll] = useState(false);
  const visibleCertificates = showAll ? certificates : certificates.slice(0, 3);

  // Parent animation variants (for staggered fade-in)
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Individual card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="Certificates" className="scroll-smooth">
      <div className="w-full h-auto bg-[#121828] py-3 px-6 text-white text-sm md:text-sm lg:text-lg md:px-16">
 
        {/* Section Title */}
        <div className="text-left mb-5">
          <motion.h2 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="font-bold text-3xl text-[#19C753] lg:text-5xl xl:mt-15">Certificates
          </motion.h2>
          </div>

        {/* Certificates Grid */}
        <motion.div
          key={visibleCertificates.length} // re-trigger animation when toggled
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid gap-10 justify-center transition duration-300 mt-10 grid-cols-2 lg:grid-cols-3"
        >
          {visibleCertificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-[#182034] rounded-2xl overflow-hidden shadow-md border border-[#19C753]/30 hover:border-[#19C753] transition-all duration-300"
            >
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-auto object-cover"
              />
              <div className="p-1 text-center lg:p-3">
                <h3 className="font-semibold text-xs xl:text-xl">{certificate.title}</h3>
                <h4 className="text-xs text-[#19C753] font-normal lg:text-base xl:text-lg">
                  {certificate.discription}
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
