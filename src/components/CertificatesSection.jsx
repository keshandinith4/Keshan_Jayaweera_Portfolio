import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const certificates = [
  {
    id: 4,
    title: "Front-End Web Development",
    description: "Issued by University of Moratuwa",
    credentialUrl: "https://open.uom.lk/verify",
    image:
      "https://nyc.cloud.appwrite.io/v1/storage/buckets/68fc4ffc0029fa78be44/files/69084f50000a04ff245f/view?project=68fc4f79002e7fc2874a&mode=admin",
  },
  {
    id: 3,
    title: "Machine Learning I",
    description: "Issued by Columbia+ University in the city of New York",
    credentialUrl:
      "https://badges.plus.columbia.edu/bb66c2d3-f6e5-4202-94e6-021ad99550d3",
    image:
      "https://nyc.cloud.appwrite.io/v1/storage/buckets/68fc4ffc0029fa78be44/files/69085221001f87ff9560/view?project=68fc4f79002e7fc2874a&mode=admin",
  },
  {
    id: 2,
    title: "Computer Hardware Basics",
    description: "Issued by Cisco",
    credentialUrl:
      "https://www.credly.com/earner/earned/badge/1be44ce2-a3ef-4583-8918-15bff3ff729f",
    image:
      "https://nyc.cloud.appwrite.io/v1/storage/buckets/68fc4ffc0029fa78be44/files/690853cc002d90f10a64/view?project=68fc4f79002e7fc2874a&mode=admin",
  },
  {
    id: 1,
    title: "Introduction to Data Science",
    description: "Issued by Cisco",
    credentialUrl:
      "https://www.credly.com/earner/earned/badge/c03ab3a2-f46e-4124-bb12-2c419c5275d8",
    image:
      "https://nyc.cloud.appwrite.io/v1/storage/buckets/68fc4ffc0029fa78be44/files/690854b800239a79cdb7/view?project=68fc4f79002e7fc2874a&mode=admin",
  },
];

export default function Certificates() {
  const [showAll, setShowAll] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // ✅ Correct logic
  const visibleCertificates = isMobile
    ? showAll
      ? certificates
      : certificates.slice(0, 2)
    : showAll
    ? certificates
    : certificates.slice(0, 3);

  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 },
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
    <section id="Certificates">
      <div className="w-full h-auto bg-[#121828] py-3 px-6 text-white text-sm md:text-sm lg:text-lg md:px-16">

        {/* Title */}
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.85 }}
          className="font-bold text-3xl lg:text-5xl text-[#19C753]"
        >
          Certificates
        </motion.h2>

        {/* Grid */}
        <motion.div
          key={visibleCertificates.length}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid gap-10 mt-10 grid-cols-2 lg:grid-cols-3"
        >
          {visibleCertificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedCertificate(certificate)}
              className="bg-[#182034] rounded-2xl overflow-hidden cursor-pointer border border-[#19C753]/30 hover:border-[#19C753]"
            >
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full object-cover"
              />
              <div className="p-3 text-center">
                <h3 className="font-semibold text-sm xl:text-xl">
                  {certificate.title}
                </h3>
                <p className="text-[#19C753] text-xs lg:text-base">
                  {certificate.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* See More Button */}
        {certificates.length > (isMobile ? 2 : 3) && (
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
        )}

        {/* Modal */}
        {selectedCertificate && (
          <div
            onClick={() => setSelectedCertificate(null)}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#182034] rounded-2xl max-w-lg w-full border-2 border-[#19C753]"
            >
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="max-h-[70vh] object-contain w-full"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold">
                  {selectedCertificate.title}
                </h3>
                <p className="text-[#19C753] mt-2">
                  {selectedCertificate.description}
                </p>

                <a
                  href={selectedCertificate.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-[#19C753] px-6 py-2 rounded-full"
                >
                  Open Link
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
