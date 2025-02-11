import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaUtensils, FaBook, FaComments, FaLock, FaMusic, FaDatabase } from 'react-icons/fa';

export default function Projects() {
  const [darkMode, setDarkMode] = useState(false);

  // Check Theme from Local Storage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle Theme
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const projects = [
    { name: "Restaurant Management System", description: "Java JSwing application for restaurant management.", icon: <FaUtensils className='text-blue-500 text-6xl mx-auto' />, link: "/projects/RMS" },
    { name: "Learning Management System", description: "A complete LMS using HTML, CSS, JS, and PHP.", icon: <FaBook className='text-blue-500 text-6xl mx-auto' />, link: "/projects/learning-management" },
    { name: "Chat Application & Networking in LMS", description: "Real-time chat and networking using PHP and sockets.", icon: <FaComments className='text-blue-500 text-6xl mx-auto' />, link: "/projects/chat-networking" },
    { name: "File Encryption System", description: "Security-focused file encryption using Python.", icon: <FaLock className='text-blue-500 text-6xl mx-auto' />, link: "/projects/FileEncryption" },
    { name: "Music Player", description: "A Java JSwing-based music player.", icon: <FaMusic className='text-blue-500 text-6xl mx-auto' />, link: "/projects/MusicPlayer" },
    { name: "Digital OBE System", description: "FYP: Digital Outcome-Based Education system in Flutter & Django.", icon: <FaDatabase className='text-blue-500 text-6xl mx-auto' />, link: "/projects/DigitalOBESystem" }
  ];

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="container mx-auto p-8">
        {/* Page Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold text-center mb-6 text-blue-500"
        >
          My Projects
        </motion.h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all text-center ${
                darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-200"
              }`}
            >
              <div className={`text-6xl mx-auto ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
                {project.icon}
              </div>
              <h2 className={`text-2xl font-bold mt-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
                {project.name}
              </h2>
              <p className={`mt-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                {project.description}
              </p>
              <Link href={project.link}>
                <button
                  className="mt-4 px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md transition-all duration-300"
                >
                  View Project
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
}
