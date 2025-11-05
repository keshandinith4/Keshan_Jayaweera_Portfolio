import React, { useState } from "react";

const certificates = [
  {
    id: 1,
    title: "Front-End Web Development",
    discription:"Issued by University of Moratuwa",
    image: "https://nyc.cloud.appwrite.io/v1/storage/buckets/68fc4ffc0029fa78be44/files/69084f50000a04ff245f/view?project=68fc4f79002e7fc2874a&mode=admin",
  },
  {
    id: 2,
    title: "Machine Learning I",
    discription:"Issued by Columbia+ University in the city of NewYork",
    image: "https://nyc.cloud.appwrite.io/v1/storage/buckets/68fc4ffc0029fa78be44/files/69085221001f87ff9560/view?project=68fc4f79002e7fc2874a&mode=admin",
  },
  {
    id: 3,
    title: "Computer Hardware Basics",
    discription:"Issued by Cisco",
    image: "https://nyc.cloud.appwrite.io/v1/storage/buckets/68fc4ffc0029fa78be44/files/690853cc002d90f10a64/view?project=68fc4f79002e7fc2874a&mode=admin",
  },
  {
    id: 4,
    title: "Introduction to Data Science",
    discription:"Issued by Cisco",
    image: "https://nyc.cloud.appwrite.io/v1/storage/buckets/68fc4ffc0029fa78be44/files/690854b800239a79cdb7/view?project=68fc4f79002e7fc2874a&mode=admin",
  },
];

export default function Certificates() {
  const [showAll, setShowAll] = useState(false);

  const visibleCertificates = showAll ? certificates : certificates.slice(0, 3);

  return (
    <section id="Certificates" className="scroll-smooth">
      <div className="w-full h-auto">
          <div className="bg-[#121828] py-15 px-1 text-white">
        <h1 className="pl-15 text-4xl md:text-5xl font-bold text-left mb-10 text-[#19C753] w-full">
          Certificates
        </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7 justify-center px-15 transition duration-300">
        {visibleCertificates.map((certificate) => (
          <div
  key={certificate.id}
  className="bg-[#182034] rounded-2xl overflow-hidden shadow-md hover:scale-105 transition-transform"
>
    <div className="border p-2 rounded-2xl border-[#19C753]/30 hover:border-[#19C753] transition duration-300">
    <img
    src={certificate.image}
    alt={`${certificate.title} - ${certificate.description}`}
    className="h-auto w-full object-cover text-center"/>
    
      <div className="p-1">
      <h3 className="font-semibold text-lg text-center">{certificate.title}</h3>
      <h4 className="font-semibold text-sm text-center text-[#19C753]">{certificate.discription}</h4>
      </div>
      </div>
  </div>

        ))}
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-[#19C753] hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors font-medium transition duration-300">
          {showAll ? "Show Less" : "See More"}
        </button>
      </div>
    </div>
      </div>
    </section>
  );
}
