import React, { useState } from "react";
import { motion } from "framer-motion";

// Mock project data with full details
const lettersData = [
  {
    id: 1,
    title: "Saegis Study Abroad Mini Expo-2025",
    image: "https://nyc.cloud.appwrite.io/v1/storage/buckets/68fc4ffc0029fa78be44/files/694b86c7001624368b51/view?project=68fc4f79002e7fc2874a&mode=admin",
    description: "Student Committee Appreciation Letter",
    fullDescription: "This appreciation letter recognizes the outstanding contribution and dedication of the student committee members who made the Saegis Study Abroad Mini Expo-2025 a tremendous success. Their hard work, commitment, and collaborative spirit were instrumental in organizing and executing this significant event.",
    duration: "30th of August 2025",
    role: "Student Committee Member",
  },
];

export default function LetterSection() {
  const [selectedLetter, setSelectedLetter] = useState(null);
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
  const visibleLetters = isMobile 
    ? (showAll ? lettersData : lettersData.slice(0, 2))
    : (showAll ? lettersData : lettersData.slice(0, 3));

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

  if (selectedLetter) {
    return <LetterDetailView letter={selectedLetter} onBack={() => setSelectedLetter(null)} />;
  }

  return (
    <section id="Letters" className="scroll-smooth">
      <div className="w-full h-auto bg-[#121828] py-3 px-6 text-white text-sm md:text-sm lg:text-lg md:px-16 lg:py-10">
        <div className="text-left mb-1 xl:mt-20">
          <motion.h2 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="font-bold text-3xl text-[#19C753] lg:text-5xl"
          >
            Letters
          </motion.h2>
        </div>

        <motion.div
          key={visibleLetters.length}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid gap-10 justify-center transition duration-300 mt-10 grid-cols-2 lg:grid-cols-3"
        >
          {visibleLetters.map((letter) => (
            <motion.div
              key={letter.id}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedLetter(letter)}
              className="bg-[#182034] rounded-lg overflow-hidden shadow-md border border-[#19C753]/30 hover:border-[#19C753] transition-all duration-300 cursor-pointer"
            >
              {letter.image ? (
                <img
                  src={letter.image}
                  alt={letter.title}
                  className="w-full h-auto object-cover"
                />
              ) : (
                <div className="h-48 w-full bg-[#0f1422] flex items-center justify-center text-gray-400 italic">
                  No Image Available
                </div>
              )}
              <div className="p-1 text-center lg:p-3">
                <h3 className="font-semibold text-xs xl:text-xl">{letter.title}</h3>
                <h4 className="text-xs text-[#19C753] font-normal lg:text-base xl:text-lg">
                  {letter.description}
                </h4>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {lettersData.length > (isMobile ? 2 : 3) && (
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
      </div>
    </section>
  );
}

function LetterDetailView({ letter, onBack }) {
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
          Back to Letters
        </motion.button>

        {/* Letter Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{letter.title}</h1>
          <p className="text-[#19C753] text-lg md:text-xl mb-6">{letter.description}</p>
        </motion.div>

        {/* Letter Image */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-10"
        >
          {letter.image ? (
            <img
              src={letter.image}
              alt={letter.title}
              className="w-full h-auto object-cover rounded-2xl shadow-2xl"
            />
          ) : (
            <div className="w-full h-96 bg-[#182034] rounded-2xl shadow-2xl flex items-center justify-center border border-[#19C753]/30">
              <span className="text-gray-400 text-xl italic">No Image Available</span>
            </div>
          )}
        </motion.div>

        {/* Letter Details Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 mb-10">

          {/* Right Column - Letter Info */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-[#182034] rounded-2xl p-4 md:p-6 border border-[#19C753]/30 ">
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#19C753]">Letter Info</h2>
              <div className="space-y-3 text-sm md:text-base">
                <div>
                  <span className="text-gray-400">Date:</span>
                  <span className="ml-2 font-medium">{letter.duration}</span>
                </div>
                <div>
                  <span className="text-gray-400">Role:</span>
                  <span className="ml-2 font-medium">{letter.role}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
          {/* Close Button */}
        <div className="flex justify-end mt-8">
          <button
            onClick={onBack}
            className="bg-[#182034] hover:bg-red-600/20 border px-4 py-2 md:px-8 md:py-3 border-[#19C753]/30 hover:border-red-500 text-white rounded-full text-sm md:text-base font-medium transition duration-300 flex items-center gap-2"
          >
            <span>Close</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}