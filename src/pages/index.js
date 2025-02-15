import { useDarkMode } from "../context/DarkModeContext";
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLaptopCode, FaCogs, FaDatabase, FaMobileAlt, FaCode, FaChartLine, FaUsers } from 'react-icons/fa';

export default function Home() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Waseem Shahzad | Software Engineer</title>
        <meta name="description" content="Portfolio of Waseem Shahzad, a Software Engineer specializing in web and app development, an expert in Oracle Flexcube, and an Application Consultant." />
        <link rel="icon" href="/Icon/hex.ico" />
      </Head>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

      {/* Hero Section */}
      <section
        className={`h-screen flex flex-col md:flex-row justify-center items-center text-center p-10 transition-all duration-500 
        ${
          darkMode
            ? "bg-gradient-to-b from-gray-900 to-gray-800 text-white"
            : "bg-gradient-to-b from-gray-100 to-gray-300 text-gray-900"
        }`}
      >
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="md:w-1/2">
          <h1 className="text-5xl font-extrabold">
            Hi, I'm <span className="text-blue-500">Waseem Shahzad</span>
          </h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 1 }} className="text-xl mt-4 max-w-xl mx-auto">
            Passionate Software Engineer with expertise in web & app development, Oracle Flexcube, and technical consulting.
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

      {/* About Me Section */}
      <section className={`p-12 text-center rounded-lg shadow-lg transition-all duration-500 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900 shadow-md"}`}>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
          <FaLaptopCode className="text-7xl text-blue-400 mx-auto mb-6" />
        </motion.div>
        <h2 className="text-5xl font-extrabold">About Me</h2>
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-lg mt-6 max-w-3xl mx-auto leading-relaxed">
          I am a Software Engineer specializing in web and app development, enterprise solutions, and technical consulting. With expertise in Oracle Flexcube, PL/SQL, Django, and modern web technologies, I thrive on solving complex problems and building efficient, user-centric applications.
        </motion.p>
      </section>

      {/* Expertise Section */}
      <section className={`p-12 text-center transition-all duration-500 ${darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-900"}`}>
        <h2 className="text-5xl font-extrabold">My Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-6xl mx-auto text-center">
          {[
            { title: "Web & App Development", icon: <FaMobileAlt className="text-blue-500 text-6xl mx-auto" />, description: "Building high-performance, scalable applications with modern frameworks." },
            { title: "Oracle Flexcube Consulting", icon: <FaCogs className="text-blue-500 text-6xl mx-auto" />, description: "Expert in Flexcube core banking solutions, customization, and support." },
            { title: "Database Optimization", icon: <FaDatabase className="text-blue-500 text-6xl mx-auto" />, description: "Optimizing databases for high availability, security, and performance." },
          ].map((expertise, index) => (
            <motion.div key={index} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.2, duration: 0.5 }} className={`p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 ${darkMode ? "bg-gray-700" : "bg-white"}`}>
              {expertise.icon}
              <h3 className="text-2xl font-semibold mt-4">{expertise.title}</h3>
              <p className="mt-4 text-lg">{expertise.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Work Section */}
      <section
        className={`p-12 text-center transition-all duration-500 ${
          darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-r from-gray-50 to-gray-200 text-gray-900"
        }`}
      >
        <h2 className="text-5xl font-extrabold">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-6xl mx-auto text-center">
          {[
            {
              title: "Innovative Web Apps",
              icon: <FaCode className="text-blue-400 text-6xl mx-auto" />,
              description:
                "Building fast, scalable, and user-friendly web applications using the latest technologies.",
            },
            {
              title: "Data Analytics",
              icon: <FaChartLine className="text-blue-400 text-6xl mx-auto" />,
              description:
                "Analyzing and optimizing business performance with cutting-edge data solutions.",
            },
            {
              title: "Team Collaboration",
              icon: <FaUsers className="text-blue-400 text-6xl mx-auto" />,
              description:
                "Seamlessly working with teams to bring ideas into reality through technology.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className={`p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 ${
                darkMode ? "bg-gray-800 hover:shadow-blue-500/50" : "bg-white hover:shadow-lg"
              }`}
            >
              {feature.icon}
              <h3 className="text-2xl font-semibold mt-4">{feature.title}</h3>
              <p className="mt-4 text-lg">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        className={`p-12 text-center transition-all duration-500 ${
          darkMode ? "bg-gray-800 text-white" : "bg-gradient-to-r from-gray-100 to-gray-300 text-gray-900"
        }`}
      >
        <h2 className="text-4xl font-bold">Get in Touch</h2>
        <p className="text-lg mt-4 max-w-xl mx-auto">
          Interested in working together? Let's talk!
        </p>
        <Link href="/contact">
          <motion.button
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-6 px-6 py-3 rounded-lg text-lg font-bold transition-all duration-300 shadow-lg 
              bg-blue-500 text-white hover:bg-blue-600 hover:shadow-blue-500/50 hover:scale-105"
          >
            Contact Me
          </motion.button>
        </Link>
      </section>

      <Footer darkMode={darkMode} />
    </div>
  );
}
