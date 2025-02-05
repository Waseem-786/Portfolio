import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <nav className="bg-gray-900 text-white p-4 dark:bg-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/certificates">Certificates</Link></li>
        </ul>
        <button 
          onClick={toggleDarkMode} 
          className="ml-4 p-2 bg-gray-700 dark:bg-gray-600 rounded-full hover:bg-gray-600 dark:hover:bg-gray-500 transition-all"
        >
          {darkMode ? <Sun className="text-yellow-400" size={20} /> : <Moon className="text-white" size={20} />}
        </button>
      </div>
    </nav>
  );
}