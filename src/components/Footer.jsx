export default function Footer() {
    return(
        <section className="relative flex items-center bg-[#121828] justify-between min-h-screen overflow-hidden">
            {/* Left Side */}
              <div className="relative z-10">
                <h2 className="mb-8 text-3xl animate-popup text-[#fff]">Keshan Jayaweera</h2>
              </div>

            {/* Meddle Side */}
              <div className="relative z-10">
                <h2 className="mb-8 text-xl animate-popup text-[#fff]">Useful Links</h2>
              </div>

            {/* Right Side */}
              <div className="relative mb-5">
                <h2 className="mb-8 text-xl animate-popup text-[#fff]">Connect With Me</h2>
              </div>
        </section>
    );
}