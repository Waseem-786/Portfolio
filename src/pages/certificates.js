import { useDarkMode } from "../context/DarkModeContext";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState} from 'react';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);
  const { darkMode, toggleDarkMode } = useDarkMode();

  const certificates = [
    { title: "Ramadan Contest 2021", image: "/Certificates/Student Nexus.jpg"},
    { title: "Version Control", image: "/Certificates/Version Control.jpg"},
    { title: "Google Soft Skills Program", image: "/Certificates/Soft Skills by Google.jpg"},
    { title: "Python Programming", image: "/Certificates/Python.jpg"},
    { title: "Django Web Framework", image: "/Certificates/Django.jpg"},
    { title: "APIs", image: "/Certificates/DRF.jpg"},
    { title: "Nestle E-Learning 2024 | Sustainbility", image: "/Certificates/Nestle.jpg"},
    { title: "Pakistan Freelancers Association (PFA)", image: "/Certificates/Pakistan Freelancers Association.jpg"},
    { title: "Problem Solving", image: "/Certificates/problem_solving_basic certificate.jpg"},
  ];

  return (
    <div className={`${darkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="container mx-auto p-8 text-center">
        <h1 className="text-4xl font-bold mb-6">My Certificates</h1>
        <p className="text-lg max-w-2xl mx-auto mb-10">
          Here are some of my professional certifications that showcase my skills.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative p-6 rounded-lg group transition-all duration-300
                ${darkMode ? "bg-gray-800 shadow-lg" : "bg-white shadow-md hover:shadow-lg"}
              `}
            >
              <Image src={cert.image} alt={cert.title} width={400} height={250} className="rounded-lg shadow-md" />
              <h2 className="text-2xl font-bold mt-4">{cert.title}</h2>
              <p className={`mt-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>{cert.description}</p>
              <button 
                onClick={() => setSelectedCert(cert.image)} 
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                View Certificate
              </button>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer darkMode={darkMode} />

      {/* Modal for Viewing Certificate */}
      {selectedCert && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50">
          <div className={`p-6 rounded-lg shadow-lg max-w-3xl relative transition-all duration-300
            ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}
          `}>
            <button 
              onClick={() => setSelectedCert(null)} 
              className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full"
            >
              X
            </button>
            <Image src={selectedCert} alt="Certificate" width={800} height={500} className="rounded-lg" />
          </div>
        </div>
      )}

    </div>
  );
}

