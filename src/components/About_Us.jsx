import { IoLogoReact, IoLogoNodejs, IoLogoCss3 } from "react-icons/io5";
import { BiLogoMongodb } from "react-icons/bi";
import { FaJsSquare } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiMysql, SiAdobephotoshop, SiAutocad, SiAdobeillustrator } from "react-icons/si";
import Keshan from "../assets/images/Keshan.jpg";

export default function About_Us() {
    return(
    <section id="About_Us" className="scroll-smooth">
      <div className="bg-[#121828] w-full flex gap-3 px-20 font-poppins">
        {/* Left Content */}
      <div className="flex flex-col w-1/2">
        <div className="flex items-center">
          <h2 className="font-bold text-5xl text-[#19C753]">About Me</h2>
        </div>
        <div className="flex-col items-start py-9 space-y-2">
            <h2 className="text-3xl font-bold mb-4 text-[#fff]">Education & Certification</h2>
              <div className="text-[#fff] text-lg font-normal w-7/8">
                <p> Currently pursuing a Software Engineering degree, gaining strong foundations in programming, web development, databases, and problem-solving while continuously enhancing skills through practical projects and learning.</p>           </div>
                  <div className="text-white rounded-lg max-w-m">
                    <ul className="list-disc list-inside text-medium space-y-2 list-outside">
                      <li>B.Sc(Hons) in Software Engineering (Ongoing)</li>
                    </ul>
                  </div>
                <div>
                  <h2 className="text-3xl font-bold mb-5 mt-9 text-[#fff]">Extra Curiculer</h2>
                    <ul className="list-disc list-inside text-medium text-[#fff] space-y-2 list-outside">
                      <li>President of Saegis Students' Forum-2024/25</li>
                      <li>Member of Leo club of Wekanda-2025</li>
                      <li>Club Treasurer of Leo club of Gampaha Circle-2023/24</li>
                      <li>LCGC Coordinator of Leo club of Gampaha Circle-2023/24</li>
                      <li>Member of LeoLions Club of Gampaha Victorius-2023/24</li>
                      <li>Assistant Treasurer of Nawa Eksath Gamunu Youth Club-2023/24</li>
                    </ul>
                </div> 
        </div>
      </div>
      {/* Right Side - about me Section */}
      <div className="container w-3/5 mt-22 border-l-4 border-[#19C753]">
          <h2 className="text-3xl font-bold mb-4 mx-5 text-[#fff]">Introduction</h2>
          <h3 className="text-2xl font-bold mb-4 mx-5 text-[#19C753]">H.D.K.S. Jayaweera</h3>
        
          <div className="flex">
            {/* User's img */}
            <img src={Keshan} alt="Profile" className="w-35 h-50 mx-5 rounded-xl"/>   

            {/* User's about */}
              <p className=" leading-relaxed text-[#fff] text-lg flex-1">
            Hello! I’m Keshan Jayaweera, a passionate and detail-oriented IT undergraduate with a strong interest in full-stack web development. I enjoy building responsive, user-focused web applications using modern technologies and clean code practices.</p>
          </div>
            <h2 className="text-3xl font-bold mb-3 mt-5 mx-5 text-[#fff]">Skills</h2>
              <p className="text-lg text-[#fff] mx-5">I have a solid foundation in full-stack web development, specializing in the MERN stack - MongoDB, Express.js, React, and Node.js. On the frontend, I build clean, responsive user interfaces using HTML5, CSS3, and JavaScript, while leveraging React for dynamic and scalable applications. On the backend, I develop robust APIs with Node.js and Express, and manage data effectively with MongoDB.</p>
              
              <div className="text-4xl mt-5 ml-12 my-5 transition duration-300 flex-col cursor-pointer "> {/* Tools Section */}
                <div className="flex gap-10">
                  <h3 className="flex items-center gap-2 ">
                  <IoLogoReact className="text-[#19C753] hover:scale-103"/>
                    <span className="text-lg text-white hover:scale-103">React</span>
                </h3>
                <h3 className="flex items-center gap-2 ">
                  <IoLogoNodejs className="text-[#19C753] hover:scale-103"/>
                    <span className="text-lg text-white hover:scale-103">Node</span>
                </h3>
                <h3 className="flex items-center gap-2 ">
                  <BiLogoMongodb className="text-[#19C753] hover:scale-103"/>
                    <span className="text-lg text-white hover:scale-103">MongoDB</span>
                </h3>
                <h3 className="flex items-center gap-2 ">
                  <FaJsSquare className="text-[#19C753] hover:scale-103"/>
                    <span className="text-lg text-white hover:scale-103">JS</span>
                </h3>
                <h3 className="flex items-center gap-2 ">
                  <SiTailwindcss className="text-[#19C753] hover:scale-103"/>
                    <span className="text-lg text-white hover:scale-103">Tailwindcss</span>
                </h3>
                </div>
                <div className="flex mt-5 gap-12">
                    <h3 className="flex items-center gap-2 ">
                      <FaHtml5 className="text-[#19C753] hover:scale-103"/>
                        <span className="text-lg text-white hover:scale-103">HTML</span>
                    </h3>
                    <h3 className="flex items-center gap-2 -mx-3">
                      <IoLogoCss3 className="text-[#19C753] hover:scale-103"/>
                        <span className="text-lg text-white hover:scale-103">CSS</span>
                    </h3>
                    <h3 className="flex items-center gap-2 mx-7">
                      <SiExpress className="text-[#19C753] hover:scale-103"/>
                        <span className="text-lg text-white hover:scale-103">Express</span>
                    </h3>
                    <h3 className="flex items-center gap-2 -mx-5">
                      <SiMysql className="text-[#19C753] hover:scale-103"/>
                        <span className="text-lg text-white hover:scale-103">MySQL</span>
                    </h3>
                </div>
              </div>
      </div>   
    </div>
    </section>
    );
}