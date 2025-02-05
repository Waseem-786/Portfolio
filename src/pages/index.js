import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newMode;
    });
  };

  return (
    <div>
      <Head>
        <title>Waseem Shahzad | Software Engineer</title>
        <meta name="description" content="Portfolio of Waseem Shahzad, a dedicated Software Engineer proficient in Python, PL/SQL, Django, and Oracle Flexcube with a strong background in web development and database design." />
      </Head>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      
      {/* Hero Section */}
      <section className="h-screen flex flex-col md:flex-row justify-center items-center text-center bg-gradient-to-b from-gray-900 to-gray-800 text-white p-10">
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="md:w-1/2">
          <h1 className="text-5xl font-extrabold">
            Hi, I'm <span className="text-blue-400">Waseem Shahzad</span>
          </h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 1 }} className="text-xl mt-4 max-w-xl mx-auto">
            Software Engineer specializing in **Oracle Flexcube, Django, and Database Systems** with expertise in Python, PL/SQL, and Web Development.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 1 }}>
            <Link href="/projects">
              <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg rounded-lg shadow-lg transition-all duration-300">
                View My Work
              </button>
            </Link>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 1 }} className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <Image src="/Waseem_Shahzad-removebg.png" alt="Waseem Shahzad" width={350} height={350} className="rounded-full shadow-lg" />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="container mx-auto p-10 text-center">
        <h2 className="text-4xl font-bold">About Me</h2>
        <motion.p initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="text-lg mt-4 max-w-2xl mx-auto">
          Passionate **Software Engineer** with a Bachelor's in Software Engineering and hands-on experience in **Oracle Flexcube, Django, PL/SQL, and Python**. Skilled in debugging, database design, and system optimization.
        </motion.p>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-100 dark:bg-gray-800 p-10">
        <h2 className="text-4xl font-bold text-center">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 max-w-4xl mx-auto text-center">
          {["Python", "PL/SQL", "Django", "Oracle Flexcube", "Java", "C++", "Web Development", "MongoDB"].map((skill, index) => (
            <motion.div key={index} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.2, duration: 0.5 }} className="p-4 bg-white dark:bg-gray-700 shadow-md rounded-lg text-lg font-semibold">
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-900 text-white p-10 text-center">
        <h2 className="text-4xl font-bold">Get in Touch</h2>
        <p className="text-lg mt-4 max-w-xl mx-auto">
          Interested in working together? Let's talk!
        </p>
        <Link href="/contact">
          <motion.button initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.3 }} className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg rounded-lg shadow-lg transition-all duration-300">
            Contact Me
          </motion.button>
        </Link>
      </section>

      <Footer />
    </div>
  );
}
