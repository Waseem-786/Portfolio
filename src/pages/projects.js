import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaUtensils, FaBook, FaComments, FaLock, FaMusic, FaDatabase } from 'react-icons/fa';

export default function Projects() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      setDarkMode(true);
    }
  }, []);

  const projects = [
    { name: "Restaurant Management System", description: "Java JSwing application for restaurant management.", icon: <FaUtensils className='text-blue-500 text-6xl mx-auto' />, link: "/projects/RMS" },
    { name: "Learning Management System", description: "A complete LMS using HTML, CSS, JS, and PHP.", icon: <FaBook className='text-blue-500 text-6xl mx-auto' />, link: "/projects/learning-management" },
    { name: "Chat Application & Networking in LMS", description: "Real-time chat and networking using PHP and sockets.", icon: <FaComments className='text-blue-500 text-6xl mx-auto' />, link: "/projects/chat-networking" },
    { name: "File Encryption System", description: "Security-focused file encryption using Python.", icon: <FaLock className='text-blue-500 text-6xl mx-auto' />, link: "/projects/FileEncryption" },
    { name: "Music Player", description: "A Java JSwing-based music player.", icon: <FaMusic className='text-blue-500 text-6xl mx-auto' />, link: "/projects/MusicPlayer" },
    { name: "Digital OBE System", description: "FYP: Digital Outcome-Based Education system in Flutter & Django.", icon: <FaDatabase className='text-blue-500 text-6xl mx-auto' />, link: "/projects/digital-obe" }
  ];

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar darkMode={darkMode} />
      <main className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-6">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }} className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg hover:shadow-xl transition-all text-center">
              {project.icon}
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-4">{project.name}</h2>
              <p className="text-gray-700 dark:text-gray-300 mt-2">{project.description}</p>
              <Link href={project.link}>
                <button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md transition-all">
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
