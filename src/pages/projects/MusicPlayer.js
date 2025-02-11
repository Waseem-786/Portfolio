import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function MusicPlayerProject() {
  const router = useRouter();
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

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-gray-200 text-gray-900 min-h-screen"}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="container mx-auto p-8">

        {/* Back Button */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.3 }} 
          className="mb-6 flex"
        >
          <button 
            onClick={() => router.push('/projects')} 
            className={`flex items-center px-6 py-3 rounded-lg shadow-lg transition-all duration-300 group ${darkMode ? "bg-gray-800 hover:bg-gray-700 text-white" : "bg-blue-500 hover:bg-blue-600 text-white"}`}
          >
            <span className="mr-2 transition-all duration-300 transform group-hover:-translate-x-1">←</span>
            Back to Projects
          </button>
        </motion.div>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-5xl font-extrabold mb-4">Music Player</h1>
          <h2 className="text-2xl font-semibold text-blue-500">Project Overview</h2>
        </motion.div>

        {/* Problem Statement and Solution */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className={`space-y-6 p-6 rounded-lg shadow-md ${
            darkMode ? "bg-gradient-to-r from-gray-800 to-gray-900" : "bg-gradient-to-r from-gray-100 to-gray-300"
          }`}
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-400">Problem Statement</h2>
          <p className="text-lg">
            Many existing music players lack an efficient way to organize and retrieve playlists dynamically.
            Users often face cluttered interfaces, metadata retrieval issues, and inefficient database handling.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-blue-400">Solution</h2>
          <ul className="list-disc list-inside space-y-3 text-lg mt-4">
            <li>Real-time metadata extraction for songs</li>
            <li>Seamless MP3 playback and playlist management</li>
            <li>Recent song tracking for quick access</li>
            <li>Java Swing-based smooth UI for better user experience</li>
            <li>Efficient database handling with MySQL</li>
          </ul>
        </motion.section>

        {/* Features Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className={`space-y-6 p-6 rounded-lg shadow-md mt-10 ${
            darkMode ? "bg-gray-800" : "bg-gray-100"
          }`}
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-400">Features</h2>

          {[
            {
              title: "Home Page",
              description: "Displays the last five played songs and allows navigation to the music and playlist pages.",
              image: "/MusicPlayer/HomePage.jpg",
            },
            {
              title: "Music Page",
              description: "Search, sort, and play music seamlessly with real-time metadata display.",
              image: "/MusicPlayer/MusicPage.jpg",
            },
            {
              title: "Playlist Page",
              description: "Create, manage, and play songs from different playlists dynamically.",
              image: "/MusicPlayer/PlaylistPage.jpg",
            },
          ].map((feature, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <p className="text-lg mt-2">{feature.description}</p>
              <img src={feature.image} alt={feature.title} className="rounded-lg shadow-lg mx-auto mt-4" />
            </div>
          ))}
        </motion.section>

        {/* External Libraries */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className={`mt-10 p-6 rounded-lg shadow-md ${
            darkMode ? "bg-gradient-to-r from-gray-800 to-gray-900" : "bg-gradient-to-r from-gray-100 to-gray-300"
          }`}
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-400">External Libraries Used</h2>
          <ul className="list-disc list-inside space-y-3 text-lg mt-4">
            <li>jaudiotagger-2.2.6-SNAPSHOT - Metadata Extraction</li>
            <li>jl1.0.1 - MP3 Playback Support</li>
            <li>mysql-connector-j-8.0.31 - MySQL Database Communication</li>
          </ul>
        </motion.section>

        {/* Flow Diagrams */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className={`mt-10 p-6 rounded-lg shadow-md ${
            darkMode ? "bg-gray-800" : "bg-gray-100"
          }`}
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-400">Project Workflow</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {["Basic Flow", "Home", "Music", "Playlist"].map((name, index) => (
              <img key={index} src={`/MusicPlayer/${name}.png`} alt={`${name} Diagram`} className="rounded-lg shadow-lg" />
            ))}
          </div>
        </motion.section>

        {/* Demo Video */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className={`mt-10 p-6 rounded-lg shadow-md ${
            darkMode ? "bg-gray-800" : "bg-gray-100"
          }`}
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-400">Demo Video</h2>
          <video controls className="w-full rounded-lg shadow-lg">
            <source src="/MusicPlayer/MusicPlayerVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.section>
      </main>

      {/* Sticky Download Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="fixed bottom-5 right-5"
      >
        <a
          href="https://github.com/Waseem-786/Music_Player"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg rounded-lg shadow-lg transition-all duration-300"
        >
          Download Project
        </a>
      </motion.div>

      <Footer darkMode={darkMode} />
    </div>
  );
}
