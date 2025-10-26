import { IoLogoReact, IoLogoNodejs} from "react-icons/io5";
import { BiLogoMongodb } from "react-icons/bi";
import { FaJsSquare } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";

export default function About_Us() {
    return(
    <section id="About_Us" className="scroll-smooth">
      <div className="bg-[#121828] w-full flex gap-3 mt-6 px-20 font-poppins">
        {/* Left Content */}
      <div className="flex flex-col w-1/2">
        <div className="flex items-center">
          <h2 className="font-bold text-7xl mt-5 text-[#19C753]">About Me</h2>
        </div>
        <div className="flex-col items-start py-9 space-y-2">
            <h2 className="text-4xl font-bold mb-4 text-[#fff]">Education & Certification</h2>
              <div className="text-[#fff] text-xl font-normal w-7/8">
                <p>A Ceylon legacy where ancient tradition meets modern artistry.Inspired by the vibrant soul of Sri Lanka, our batik creations are hand-dyed using age-old techniques passed down through generations. Every pattern echoes the island’s history, from sacred motifs to natural landscapes, reimagined with a contemporary eye. At Dyes & Threads, we don’t just craft clothing-we bring to life wearable art, woven with heritage, color, and timeless beauty. Step into a world where tradition is honored, and style is redefined.</p>
              </div>
        </div>
      </div>
      {/* Right Side - about me Section */}
      <div className="container w-2/3 mt-35 border-l-4 border-[#19C753]">
          <h2 className="text-4xl font-bold mb-4 mx-5 text-[#fff]">Introduction</h2>
          <h3 className="text-3xl font-bold mb-4 mx-5 text-[#19C753]">H.D.K.S. Jayaweera</h3>
        
          <div className="flex">
            {/* User's img */}
            <img src="https://nyc.cloud.appwrite.io/v1/storage/buckets/68fc4ffc0029fa78be44/files/68fc52d50022c543682d/view?project=68fc4f79002e7fc2874a&mode=admin.jpg" alt="Keshan Jayaweera" className="rounded-2xl shadow-lg w-[200px] h-[300px] mb-4 mx-5 object-cover cursor-pointer hover:opacity-80 transition duration-300"/>
            {/* User's about */}
          
              <p className=" leading-relaxed text-[#fff] text-xl flex-1">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen
            book. It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing</p>
          </div>
            <h2 className="text-4xl font-bold mb-4 mx-5 text-[#fff]">Skills</h2>
              <p className="text-xl text-[#fff] mx-5">I have a solid foundation in full-stack web development, specializing in the MERN stack - MongoDB, Express.js, React, and Node.js. On the frontend, I build clean, responsive user interfaces using HTML5, CSS3, and JavaScript, while leveraging React for dynamic and scalable applications. On the backend, I develop robust APIs with Node.js and Express, and manage data effectively with MongoDB.</p>
              
              <div className="text-5xl mt-5 ml-5 my-5 transition duration-300 flex gap-10 cursor-pointer "> {/* Tools Section */}
                
                <h3 className="flex items-center gap-2 ">
                  <IoLogoReact className="text-[#19C753] hover:scale-103"/>
                    <span className="text-2xl text-white hover:scale-103">React</span>
                </h3>
                <h3 className="flex items-center gap-2 ">
                  <IoLogoNodejs className="text-[#19C753] hover:scale-103"/>
                    <span className="text-2xl text-white hover:scale-103">Node</span>
                </h3>
                <h3 className="flex items-center gap-2 ">
                  <BiLogoMongodb className="text-[#19C753] hover:scale-103"/>
                    <span className="text-2xl text-white hover:scale-103">MongoDB</span>
                </h3>
                <h3 className="flex items-center gap-2 ">
                  <FaJsSquare className="text-[#19C753] hover:scale-103"/>
                    <span className="text-2xl text-white hover:scale-103">JS</span>
                </h3>
                <h3 className="flex items-center gap-2 ">
                  <SiTailwindcss className="text-[#19C753] hover:scale-103"/>
                    <span className="text-2xl text-white hover:scale-103">Tailwindcss</span>
                </h3>
                <h3 className="flex items-center gap-2 ">
                  <FaHtml5 className="text-[#19C753] hover:scale-103"/>
                    <span className="text-2xl text-white hover:scale-103">HTML</span>
                </h3>
              </div>
      </div>   
    </div>
    </section>
    );
}