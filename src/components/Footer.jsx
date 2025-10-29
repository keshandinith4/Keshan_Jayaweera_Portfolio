import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-[#121828] text-white">
      {/* Top Line */}
      <div className="border-t border-gray-600 w-full"></div>

      <footer className="flex flex-col md:flex-row items-start md:items-center justify-between px-10 py-16 md:px-20 gap-10">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl text-[#19C753] font-bold animate-popup">
            Keshan Jayaweera
          </h2>
          <h3 className="font-medium mt-5">
            No.164 Balummahara, <br />
            Mudungoda <br />
            Sri Lanka
          </h3>
          <div className="mt-5 font-medium">
            <p>
              <span className="font-semibold">Phone:</span> +94 76 830 9738
            </p>
            <p>
              <span className="font-semibold">Email:</span> keshandinith4@gmail.com
            </p>
          </div>
        </div>

        {/* Middle Side */}
        <div>
          <h2 className="text-xl font-semibold animate-popup">Useful Links</h2>
          <ul className="mt-5 space-y-2 font-medium">
            {["Home", "About_Us", "Products", "Contact_Me"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="transition duration-300 hover:text-[#19C753] hover:scale-105 inline-block"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side */}
        <div>
          <h2 className="text-xl font-semibold animate-popup">Connect With Me</h2>
          <p className="mt-5 text-medium">
            Passionate IT student with expertise in<br /> multiple programming
            languages and core<br /> computer science concepts.
          </p>
          <div className="flex gap-5 text-3xl mt-5">
                  <a href="https://www.linkedin.com/in/oyage-linkedin-keshandinith4" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="transition duration-300 hover:text-[#19C753] hover:scale-110 cursor-pointer" />
                  </a>
          
                  <a href="https://github.com/oyage-github-keshandinith4" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="transition duration-300 hover:text-[#19C753] hover:scale-110 cursor-pointer" />
                  </a>
          
                  <a href="https://facebook.com/oyage-facebook-username" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="transition duration-300 hover:text-[#19C753] hover:scale-110 cursor-pointer" />
                  </a>
          
                  <a href="https://wa.me/94719943746" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="transition duration-300 hover:text-[#19C753] hover:scale-110 cursor-pointer" />
                  </a>
                </div>
        </div>
      </footer>

      {/* Bottom Line */}
      <div className="border-t border-gray-600 w-full"></div>

      {/* Copyright */}
      <div className="text-center py-4 text-sm">
        © Copyright Portfolio All Rights Reserved. <br />
        Designed By Keshan Jayaweera
      </div>
    </div>
  );
}
