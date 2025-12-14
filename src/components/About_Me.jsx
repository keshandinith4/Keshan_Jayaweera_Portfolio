import { IoLogoReact, IoLogoNodejs, IoLogoCss3 } from "react-icons/io5";
import { BiLogoMongodb } from "react-icons/bi";
import { FaJsSquare, FaHtml5 } from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiMysql } from "react-icons/si";
import { motion } from "framer-motion";
import Keshan from "../assets/images/Keshan.jpg";

export default function About_Me() {
  return (
    <section
      id="About_Me"
      className="scroll-smooth bg-[#121828] py-12 px-8 lg:px-20 font-poppins"
    >
      {/* Title outside cards */}
      <div className="text-left -mb-10">
        <motion.h2 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="font-bold text-5xl text-[#19C753] mt-5">About Me
        </motion.h2>
      </div>

      {/* Two Card Layout */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-5">

        {/* Left Card - Education & Extra Curricular */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3  }}
          className="w-full lg:w-1/2 mt-25 p-8 transition duration-300">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Education & Certification
              </h3>
                <p className="text-white text-lg leading-relaxed">
                Currently pursuing a Software Engineering degree, gaining strong foundations 
                in programming, web development, databases, and problem-solving while continuously 
                enhancing skills through practical projects and learning.
                </p>
              <ul className="list-disc list-inside text-white mt-3 ml-2">
                <li>B.Sc(Hons) in Software Engineering (Ongoing)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Extra Curricular</h3>
              <ul className="list-disc list-inside text-white space-y-2 ml-2">
                <li>President of Saegis Students' Forum-2024/25</li>
                <li>Member of Leo club of Wekanda-2025</li>
                <li>Club Treasurer of Leo club of Gampaha Circle-2023/24</li>
                <li>LCGC Coordinator of Leo club of Gampaha Circle-2023/24</li>
                <li>Member of LeoLions Club of Gampaha Victorius-2023/24</li>
                <li>Assistant Treasurer of Nawa Eksath Gamunu Youth Club-2023/24</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Right Card - Introduction & Skills */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3  }}
          className=" w-full lg:w-1/2 p-8 border  transition duration-300"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Introduction</h2>
          <h3 className="text-2xl font-bold mb-4 text-[#19C753]">H.D.K.S. Jayaweera</h3>

          <div className="flex flex-col sm:flex-row items-start gap-5">
            <img
              src={Keshan}
              alt="Profile"
              className="w-40 h-40 object-cover rounded-xl border-2 border-[#19C753]"
            />
            <p className="text-white text-lg leading-relaxed">
              Hello! I’m Keshan Jayaweera, a passionate and detail-oriented IT undergraduate 
              with a strong interest in full-stack web development. I enjoy building responsive, 
              user-focused web applications using modern technologies and clean code practices.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-3xl font-bold mb-3 text-white">Skills</h2>
            <p className="text-lg text-white leading-relaxed mb-5">
              I have a solid foundation in full-stack web development, specializing in the MERN stack
               [<span className="text-[#19C753]">MongoDB, Express.js, React, and Node.js</span>]. On the frontend, I build clean, responsive UIs using 
              HTML5, CSS3, and JavaScript, while leveraging React for dynamic and scalable applications.
            </p>

            {/* Skills Icons */}
            <div className="text-4xl mt-5 flex flex-wrap gap-8 cursor-pointer">
              <div className="flex items-center gap-2">
                <IoLogoReact className="text-[#19C753] hover:scale-110 transition" />
                <span className="text-white text-lg">React</span>
              </div>
              <div className="flex items-center gap-2">
                <IoLogoNodejs className="text-[#19C753] hover:scale-110 transition" />
                <span className="text-white text-lg">Node</span>
              </div>
              <div className="flex items-center gap-2">
                <BiLogoMongodb className="text-[#19C753] hover:scale-110 transition" />
                <span className="text-white text-lg">MongoDB</span>
              </div>
              <div className="flex items-center gap-2">
                <FaHtml5 className="text-[#19C753] hover:scale-110 transition" />
                <span className="text-white text-lg">HTML</span>
              </div>
              <div className="flex items-center gap-2">
                <FaJsSquare className="text-[#19C753] hover:scale-110 transition" />
                <span className="text-white text-lg">JavaScript</span>
              </div>
              <div className="flex items-center gap-2">
                <IoLogoCss3 className="text-[#19C753] hover:scale-110 transition" />
                <span className="text-white text-lg">CSS</span>
              </div>
              <div className="flex items-center gap-2">
                <SiExpress className="text-[#19C753] hover:scale-110 transition" />
                <span className="text-white text-lg">Express</span>
              </div>
              <div className="flex items-center gap-2">
                <SiMysql className="text-[#19C753] hover:scale-110 transition" />
                <span className="text-white text-lg">MySQL</span>
              </div>
              <div className="flex items-center gap-2">
                <SiTailwindcss className="text-[#19C753] hover:scale-110 transition" />
                <span className="text-white text-lg">TailwindCSS</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
