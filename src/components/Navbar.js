import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu

  return (
    <nav className={`transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900 shadow-lg"}`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>My Portfolio</h1>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-full transition-all ${darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-300 hover:bg-gray-400"}`}
          >
            <span className="sr-only">Open Menu</span>
            {isMenuOpen ? (
              <motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </motion.svg>
            ) : (
              <motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </motion.svg>
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/certificates">Certificates</Link></li>
        </ul>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className={`ml-4 p-2 rounded-full transition-all ${darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-300 hover:bg-gray-400"}`}
        >
          {darkMode ? <Sun className="text-yellow-400" size={20} /> : <Moon className="text-gray-900" size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`lg:hidden p-4 transition-all ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"}`}
        >
          <ul className="flex flex-col items-center space-y-4">
            <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link href="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
            <li><Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            <li><Link href="/certificates" onClick={() => setIsMenuOpen(false)}>Certificates</Link></li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
}
