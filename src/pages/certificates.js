import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    { title: "React Developer", image: "/certificates/Student Nexus.jpg", description: "Certified React Developer by XYZ Institute." },
    { title: "Next.js Expert", image: "/certificates/Version Control.jpg", description: "Advanced Next.js Certification by ABC Academy." },
    { title: "JavaScript Mastery", image: "/certificates/Soft Skills by Google.jpg", description: "Professional JavaScript Developer Certification." },
    { title: "React Developer", image: "/certificates/Python.jpg", description: "Certified React Developer by XYZ Institute." },
    { title: "Next.js Expert", image: "/certificates/Django.jpg", description: "Advanced Next.js Certification by ABC Academy." },
    { title: "JavaScript Mastery", image: "/certificates/DRF.jpg", description: "Professional JavaScript Developer Certification." },
    { title: "JavaScript Mastery", image: "/certificates/Nestle.jpg", description: "Professional JavaScript Developer Certification." },
    { title: "JavaScript Mastery", image: "/certificates/Pakistan Freelancers Association.jpg", description: "Professional JavaScript Developer Certification." },
    { title: "JavaScript Mastery", image: "/certificates/problem_solving_basic certificate.jpg", description: "Professional JavaScript Developer Certification." },
  ];

  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <Navbar />
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
              className="relative p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg group"
            >
              <Image src={cert.image} alt={cert.title} width={400} height={250} className="rounded-lg shadow-md" />
              <h2 className="text-2xl font-bold mt-4">{cert.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 mt-2">{cert.description}</p>
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
      <Footer />

      {/* Modal for Viewing Certificate */}
      {selectedCert && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg max-w-3xl relative">
            <button onClick={() => setSelectedCert(null)} className="absolute top-3 right-3 text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-full">X</button>
            <Image src={selectedCert} alt="Certificate" width={800} height={500} className="rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
}
