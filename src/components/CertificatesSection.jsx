import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const certificates = [
  {
  id: 5,
  title: "React - The Complete Guide",
  description: "Issued by Udemy",
  credentialId: "Null",
  credentialUrl: "https://www.udemy.com/certificate/UC-REACT-2025-001",
  image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg"
},
{
  id: 4,
  title: "Python for Everybody",
  description: "Issued by Coursera - University of Michigan",
  credentialId: "Null",
  credentialUrl: "https://www.coursera.org/account/accomplishments/PY-COURSERA-2025-002",
  image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg"
},
{
  id: 3,
  title: "Google IT Support Professional",
  description: "Issued by Google via Coursera",
  credentialId: "Null",
  credentialUrl: "https://www.coursera.org/account/accomplishments/GOOGLE-IT-2025-003",
  image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
},
{
  id: 2,
  title: "Java Programming Masterclass",
  description: "Issued by Udemy",
  credentialId: "Null",
  credentialUrl: "https://www.udemy.com/certificate/UC-JAVA-2025-004",
  image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
},
{
  id: 1,
  title: "AI Foundations",
  description: "Issued by IBM",
  credentialId: "Null",
  credentialUrl: "https://www.credly.com/badges/IBM-AI-2025-005",
  image: "https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg"
}

];

export default function Certificates() {
  const [showAll, setShowAll] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.85 }}
          className="font-bold text-3xl lg:mt-20 lg:text-5xl text-[#19C753]"
        >
          Certificates
        </motion.h2>

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
              className="bg-[#182034] rounded-2xl overflow-hidden cursor-pointer border border-[#19C753]/30 hover:border-[#19C753] flex flex-col h-full"
            >
              <div className="flex-shrink-0">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-48 md:h-56 lg:h-64 object-cover"
                />
              </div>
              <div className="p-3 text-center flex-grow flex flex-col justify-center">
                <h3 className="font-semibold text-sm xl:text-xl line-clamp-2">
                  {certificate.title}
                </h3>
                <p className="text-[#19C753] text-xs lg:text-base mt-1 line-clamp-2">
                  {certificate.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

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

                {selectedCertificate.credentialId && (
                  <div className="mt-4">
                    <p className="text-gray-400 text-xs mb-1">Credential ID</p>
                    <p className="text-white text-sm font-mono">
                      {selectedCertificate.credentialId}
                    </p>
                  </div>
                )}

                {selectedCertificate.credentialUrl && (
                  <a
                    href={selectedCertificate.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-[#19C753] hover:bg-green-600 px-6 py-2 text-sm rounded-full transition duration-300"
                  >
                    Open Link
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}