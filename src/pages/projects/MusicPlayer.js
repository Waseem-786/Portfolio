import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';

export default function MusicPlayerProject() {
  return (
    <div className="dark:bg-gray-900 dark:text-white min-h-screen relative">
      <Navbar />

      <main className="container mx-auto p-8">
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
          className="space-y-6 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-400">Problem Statement</h2>
          <p className="text-lg">
            Many existing music players lack an efficient way to organize and retrieve playlists dynamically.
            Users often face cluttered interfaces, metadata retrieval issues, and inefficient database handling.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-blue-400">Solution</h2>
          <p className="text-lg">
            This project is a **Java-based Music Player** that provides:
          </p>
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
          className="space-y-6 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md mt-10"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-400">Features</h2>

          <div>
            <h3 className="text-2xl font-semibold">1. Home Page</h3>
            <p className="text-lg mt-2">
              Displays the last five played songs and allows navigation to the music and playlist pages.
            </p>
            <img src="/MusicPlayer/HomePage.jpg" alt="Home Page" className="rounded-lg shadow-lg mx-auto" />
          </div>

          <div>
            <h3 className="text-2xl font-semibold">2. Music Page</h3>
            <p className="text-lg mt-2">
              Search, sort, and play music seamlessly with real-time metadata display.
            </p>
            <img src="/MusicPlayer/MusicPage.jpg" alt="Music Page" className="rounded-lg shadow-lg mx-auto" />
          </div>

          <div>
            <h3 className="text-2xl font-semibold">3. Playlist Page</h3>
            <p className="text-lg mt-2">
              Create, manage, and play songs from different playlists dynamically.
            </p>
            <img src="/MusicPlayer/PlaylistPage.jpg" alt="Playlist Page" className="rounded-lg shadow-lg mx-auto" />
          </div>
        </motion.section>

        {/* External Libraries */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-10 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg shadow-md"
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
          className="mt-10 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-400">Project Workflow</h2>
          <p className="text-lg mt-2">
            Below are flow diagrams representing different aspects of the music player's workflow and functionalities:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <img src="/MusicPlayer/Basic Flow.png" alt="Basic Flow Diagram" className="rounded-lg shadow-lg" />
            <img src="/MusicPlayer/Home.png" alt="Home Page Flow" className="rounded-lg shadow-lg" />
            <img src="/MusicPlayer/Music.png" alt="Playlist Page Flow" className="rounded-lg shadow-lg" />
            <img src="/MusicPlayer/Playlist.png" alt="Music Page Flow" className="rounded-lg shadow-lg" />
          </div>
        </motion.section>

        {/* Demo Video */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-10 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
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

      <Footer />
    </div>
  );
}
