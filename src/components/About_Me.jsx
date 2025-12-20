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
      className="scroll-smooth bg-[#121828] py-8 px-1 font-poppins"
    >
      {/* Title outside cards */}
      <div className="text-left">
        <motion.h2 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="font-bold text-3xl text-[#19C753] ml-6 lg:text-5xl lg:mt-15">About Me
        </motion.h2>
      </div>

      {/* Two Card Layout */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-4 md:gap-5 text-sm md:text-sm lg:text-lg">

        {/* Right Card - Introduction & Skills (First on mobile) */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3  }}
          className="w-full w-1/2 lg:order-2 p-5 border transition duration-300"
        >
          <h2 className="text-2xl font-bold mb-3 text-white lg:text-4xl">Introduction</h2>
          <h3 className="text-xl lg:text-3xl font-bold mb-3 text-[#19C753]">H.D.K.S. Jayaweera</h3>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-4">
            <img
              src={Keshan}
              alt="Profile"
              className="w-32 h-40 lg:w-38 lg:h-52 object-cover rounded-xl border-2 border-[#19C753] flex-shrink-0"
            />
            <p className="text-white text-base leading-relaxed lg:text-xl text-center lg:text-left">
              Hello! I'm Keshan Jayaweera, a passionate and detail-oriented IT undergraduate 
              with a strong interest in full-stack web development. I enjoy building responsive, 
              user-focused web applications using modern technologies and clean code practices.
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-2 text-white lg:text-4xl">Skills</h2>
            <p className="text-base text-white leading-relaxed mb-4 lg:text-xl">
              I have a solid foundation in full-stack web development, specializing in the MERN stack
               [<span className="text-[#19C753]">MongoDB, Express.js, React, and Node.js</span>]. On the frontend, I build clean, responsive UIs using 
              HTML5, CSS3, and JavaScript, while leveraging React for dynamic and scalable applications.
            </p>

            {/* Skills Icons */}
            <div className="text-3xl mt-4 flex flex-wrap gap-6 cursor-pointer">
              <div className="flex items-center gap-2">
                <IoLogoReact className="text-[#19C753] hover:scale-110 transition" />
                <span className="text-white text-base">React</span>
              </div>
              <div className="flex items-center gap-2">
                <IoLogoNodejs className="text-[#19C753] hover:scale-110 transition" />
                <span className="text-white text-base">Node</span>
              </div>
              <div className="flex items-center gap-2">
                <BiLogoMongodb className="text-[#19C753] hover:scale-110 transition" />
                <span className="text-white text-base">MongoDB</span>
              </div>
              <div className="flex items-center gap-2">
                <FaHtml5 className="text-[#19C753] hover:scale-110 transition" />
                <span className="text-white text-base">HTML</span>
              </div>
              <div className="flex items-center gap-2">
                <FaJsSquare className="text-[#19C753] hover:scale-110 transition" />
                <span className="text-white text-base">JavaScript</span>
              </div>
              <div className="flex items-center gap-2">
                <IoLogoCss3 className="text-[#19C753] hover:scale-110 transition" />
                <span className="text-white text-base">CSS</span>
              </div>
              <div className="flex items-center gap-2">
                <SiExpress className="text-[#19C753] hover:scale-110 transition" />
                <span className="text-white text-base">Express</span>
              </div>
              <div className="flex items-center gap-2">
                <SiMysql className="text-[#19C753] hover:scale-110 transition" />
                <span className="text-white text-base">MySQL</span>
              </div>
              <div className="flex items-center gap-2">
                <SiTailwindcss className="text-[#19C753] hover:scale-110 transition" />
                <span className="text-white text-base">TailwindCSS</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Left Card - Education & Extra Curricular (Second on mobile) */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3  }}
          className="w-full p-6 transition duration-300">
          <div className="space-y-5">
            <div>
              <h3 className="text-2xl font-bold mb-3 text-white lg:text-4xl">
                Education & Certification
              </h3>
                <p className="text-white text-base leading-relaxed lg:text-xl">
                Currently pursuing a Software Engineering degree, gaining strong foundations 
                in programming, web development, databases, and problem-solving while continuously 
                enhancing skills through practical projects and learning.
                </p>
              <ul className="list-disc list-inside text-white mt-2 ml-2">
                <li>B.Sc(Hons) in Software Engineering (Ongoing)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3 text-white lg:text-4xl">Extra Curricular</h3>
              <ul className="list-disc list-inside text-white space-y-1.5 ml-2">
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

      </div>
    </section>
  );
}