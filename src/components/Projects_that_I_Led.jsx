import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const letters = [
  {
    id: 1,
    title: "Saegis Study Abroad Mini Expo-2025",
    discription: "Issued by Saegis Campus",
    image:
      "https://nyc.cloud.appwrite.io/v1/storage/buckets/68fc4ffc0029fa78be44/files/694b86c7001624368b51/view?project=68fc4f79002e7fc2874a&mode=admin.png",
  },
];

export default function Letters() {
  const [showAll, setShowAll] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // 🔹 Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 🔹 Correct slicing logic
  const visibleLetters = isMobile
    ? showAll
      ? letters
      : letters.slice(0, 2)
    : showAll
    ? letters
    : letters.slice(0, 3);

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
    <section id="Letters">
      <div className="w-full h-auto py-6 bg-[#121828] py-3 px-6 text-white text-sm md:text-sm lg:text-lg md:px-16">

        {/* Title */}
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.85 }}
          className="font-bold text-3xl text-[#19C753] lg:text-5xl"
        >
          Projects That I Led
        </motion.h2>

        {/* Grid */}
        <motion.div
          key={visibleLetters.length}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid gap-10 mt-10 grid-cols-2 lg:grid-cols-3"
        >
          {visibleLetters.map((letter) => (
            <motion.div
              key={letter.id}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedLetter(letter)}
              className="bg-[#182034] rounded-2xl overflow-hidden cursor-pointer border border-[#19C753]/30 hover:border-[#19C753]"
            >
              <img
                src={letter.image}
                alt={letter.title}
                className="w-full object-cover"
              />
              <div className="p-3 text-center">
                <h3 className="font-semibold text-xs xl:text-xl">
                  {letter.title}
                </h3>
                <p className="text-[#19C753] text-xs lg:text-base">
                  {letter.discription}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* See More Button (auto hide) */}
        {letters.length > (isMobile ? 2 : 3) && (
          <div className="text-center mt-10">
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
        )}

        {/* Modal */}
        {selectedLetter && (
          <div
            onClick={() => setSelectedLetter(null)}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#182034] rounded-2xl max-w-lg w-full border-2 border-[#19C753]"
            >
              <img
                src={selectedLetter.image}
                alt={selectedLetter.title}
                className="w-full object-contain"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold">
                  {selectedLetter.title}
                </h3>
                <p className="text-[#19C753] mt-2">
                  {selectedLetter.discription}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
