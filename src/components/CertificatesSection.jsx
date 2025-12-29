import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const certificates = [
  {
  id: 8,
  title: "ASP.NET Core Web API",
  description: "Issued by Udemy",
  credentialId: "UC-f27e231e-b85f-413d-863a-9782a3d6c9e8",
  credentialUrl: "https://www.udemy.com/certificate/UC-f27e231e-b85f-413d-863a-9782a3d6c9e8/",
  image: "https://nyc.cloud.appwrite.io/v1/storage/buckets/68fc4ffc0029fa78be44/files/694b89a5003d1e6f1aa9/view?project=68fc4f79002e7fc2874a&mode=admin.jpeg"
},
  {
  id: 7,
  title: "Front-End Web Development",
  description: "Issued by University of Moratuwa",
  credentialId: "JWAwQiY3Lh",
  credentialUrl: "https://open.uom.lk/verify",
  image: "https://nyc.cloud.appwrite.io/v1/storage/buckets/68fc4ffc0029fa78be44/files/6950fe4e0038dc1b5bd9/view?project=68fc4f79002e7fc2874a&mode=admin.jpeg"
},
  
  {
  id: 6,
  title: "Machine Learning I",
  description: "Issued by University of Columbia+ in the City of New York",
  credentialId: "160307524",
  credentialUrl: "https://badges.plus.columbia.edu/bb66c2d3-f6e5-4202-94e6-021ad99550d3",
  image: "https://nyc.cloud.appwrite.io/v1/storage/buckets/68fc4ffc0029fa78be44/files/6950fd37003adc7c2c3b/view?project=68fc4f79002e7fc2874a&mode=admin.jpeg"
},
  {
  id: 5,
  title: "SLIIT CODE FEST-2025-Participation Certificate",
  description: "Issued by SLIIT Campus",
  credentialId: "",
  credentialUrl: "",
  image: "https://nyc.cloud.appwrite.io/v1/storage/buckets/68fc4ffc0029fa78be44/files/694b9aec001fbf27196e/view?project=68fc4f79002e7fc2874a&mode=admin.jpeg"
},
{
  id: 4,
  title: "LYCEUM Campus Research Circle - 2025 -Participation Certificate",
  description: "Issued by Lyceum Campus",
  credentialId: "",
  credentialUrl: "",
  image: "https://nyc.cloud.appwrite.io/v1/storage/buckets/68fc4ffc0029fa78be44/files/694b87ed002aa5db8c03/view?project=68fc4f79002e7fc2874a&mode=admin.jpeg"
},
{
  id: 3,
  title: "Saegis Code Pulse 2024-Participation Certificate",
  description: "Issued by Saegis Campus",
  credentialId: "",
  credentialUrl: "",
  image: "https://nyc.cloud.appwrite.io/v1/storage/buckets/68fc4ffc0029fa78be44/files/694b872200371e4dcb96/view?project=68fc4f79002e7fc2874a&mode=admin.jpg"
},
{
  id: 2,
  title: "Computer Hardware Basics",
  description: "Issued by Cisco",
  credentialId: "1be44ce2-a3ef-4583-8918-15bff3ff729f",
  credentialUrl: "https://www.credly.com/earner/earned/badge/1be44ce2-a3ef-4583-8918-15bff3ff729f",
  image: "https://nyc.cloud.appwrite.io/v1/storage/buckets/68fc4ffc0029fa78be44/files/690853cc002d90f10a64/view?project=68fc4f79002e7fc2874a&mode=admin.jpeg"
},
{
  id: 1,
  title: "Introduction to Data Science",
  description: "Issued by Cisco",
  credentialId: "c03ab3a2-f46e-4124-bb12-2c419c5275d8",
  credentialUrl: "https://www.credly.com/earner/earned/badge/c03ab3a2-f46e-4124-bb12-2c419c5275d8",
  image: "https://nyc.cloud.appwrite.io/v1/storage/buckets/68fc4ffc0029fa78be44/files/690854b800239a79cdb7/view?project=68fc4f79002e7fc2874a&mode=admin.jpeg"
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
          className="font-bold text-3xl lg:mt-15 lg:text-5xl text-[#19C753]"
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
              className="bg-[#182034] rounded-lg overflow-hidden cursor-pointer border border-[#19C753]/30 hover:border-[#19C753] flex flex-col h-full"
            >
              <div className="flex-shrink-0">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-28 lg:h-auto object-cover"
                />
              </div>
              <div className="p-3 text-center flex-grow flex flex-col justify-center">
                <h3 className="font-semibold text-xs xl:text-xl line-clamp-2">
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
              className="bg-[#182034] rounded-2xl overflow-hidden shadow-md border border-[#19C753]/30 hover:border-[#19C753] transition-all duration-300 cursor-pointer"
            >
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="w-full h-auto object-cover"
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