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
      <div className="bg-[#121828] text-white flex flex-col justify-center py-16 px-6">
        
        {/* Section Title */}
        <div className="text-left mb-5">
        <motion.h2 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="font-bold text-5xl text-[#19C753] mt-5 mx-18">Certificates
        </motion.h2>
      </div>

        {/* Certificates Grid */}
        <motion.div
          key={visibleCertificates.length} // re-trigger animation when toggled
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-6xl w-full justify-center items-center mx-auto"
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
                className="w-full h-60 object-cover"
              />
              <div className="p-3 text-center">
                <h3 className="font-semibold text-lg">{certificate.title}</h3>
                <h4 className="text-sm text-[#19C753] font-medium">
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
          className="text-center mt-10"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-[#19C753] hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium transition duration-300"
          >
            {showAll ? "Show Less" : "See More"}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
