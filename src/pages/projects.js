import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Projects() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      setDarkMode(true);
    }
  }, []);

  const projects = [
    { name: "E-commerce Platform", description: "A scalable e-commerce web application.", link: "#" },
    { name: "Portfolio Website", description: "A sleek and modern developer portfolio.", link: "#" },
    { name: "Task Management App", description: "A simple and effective task manager.", link: "#" },
    { name: "Blog CMS", description: "A content management system for bloggers.", link: "#" }
  ];

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar darkMode={darkMode} />
      <main className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-6">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }} className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg hover:shadow-xl transition-all">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{project.name}</h2>
              <p className="text-gray-700 dark:text-gray-300 mt-2">{project.description}</p>
              <a href={project.link} className="mt-3 inline-block text-blue-500 hover:text-blue-700 transition-all">View Project</a>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
}
