import { useDarkMode } from "../context/DarkModeContext";
import MetaHead from '../components/MetaHead';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLaptopCode, FaBug, FaCogs, FaPlug, FaNetworkWired, FaCode, FaChartLine, FaUsers } from 'react-icons/fa';

export default function Home() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={darkMode ? "dark" : ""}>
      <MetaHead/>
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
            Debugging by day, engineering solutions by night—turning complex problems into seamless experiences, one line of code at a time.
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
        <motion.p  initial={{ opacity: 0, y: 10 }}  animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-lg mt-6 max-w-3xl mx-auto leading-loose text-justify">
          I'm a passionate software engineer with a knack for solving complex problems and a deep love for backend development. With a strong foundation in web and app development, I specialize in debugging and delivering robust, scalable solutions. Currently, I work as an Application Consultant for Oracle Flexcube, where I provide customization support and resolve critical production issues for leading banks. My expertise lies in turning technical challenges into seamless experiences, ensuring systems run smoothly and efficiently. When I’m not coding, I’m constantly learning and exploring new technologies to stay ahead in the ever-evolving world of software engineering. Let’s build something amazing together!
          {/* I am a Software Engineer specializing in web and app development, enterprise solutions, and technical consulting. With expertise in Oracle Flexcube, PL/SQL, Django, and modern web technologies, I thrive on solving complex problems and building efficient, user-centric applications. */}
        </motion.p>
        <Link href="/about">
          <motion.button
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-6 px-6 py-3 rounded-lg text-lg font-bold transition-all duration-300 shadow-lg 
              bg-blue-500 text-white hover:bg-blue-600 hover:shadow-blue-500/50 hover:scale-105"
          >
            About Me
          </motion.button>
        </Link>
      </section>

      {/* Expertise Section */}
      <section className={`p-12 text-center transition-all duration-500 ${darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-900"}`}>
        <h2 className="text-5xl font-extrabold">My Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-6xl mx-auto text-center">
          {[
            { 
              title: "Backend Development", 
              icon: <FaCode className="text-blue-500 text-6xl mx-auto" />, 
              description: "Designing and building robust, scalable backend systems to power seamless applications." 
            },
            { 
              title: "Oracle Flexcube Consulting", 
              icon: <FaCogs className="text-blue-500 text-6xl mx-auto" />, 
              description: "Providing expert customization, debugging, and production support for core banking solutions." 
            },
            { 
              title: "Debugging & Problem Solving", 
              icon: <FaBug className="text-blue-500 text-6xl mx-auto" />, 
              description: "Expert in identifying and resolving complex issues to ensure smooth system performance." 
            },
            { 
              title: "APIs Integration", 
              icon: <FaPlug className="text-blue-500 text-6xl mx-auto" />, 
              description: "Seamlessly integrating third-party APIs to enhance application functionality and connectivity." 
            },
            { 
              title: "REST API Creation", 
              icon: <FaNetworkWired className="text-blue-500 text-6xl mx-auto" />, 
              description: "Building secure and scalable RESTful APIs using Django for modern web and mobile applications." 
            },
          ].map((expertise, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ delay: index * 0.2, duration: 0.5 }} 
              className={`p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 ${darkMode ? "bg-gray-700" : "bg-white"}`}
            >
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
              title: "Innovative Web and Mobile Apps",
              icon: <FaCode className="text-blue-400 text-6xl mx-auto" />,
              description:
                "Building fast, scalable, and user-friendly web applications using the latest technologies.",
            },
            {
              title: "RESTful APIs with Django",
              icon: <FaNetworkWired className="text-blue-400 text-6xl mx-auto" />,
              description:
                "Creating secure and scalable RESTful APIs to enable seamless communication between systems.",
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
          Got a project in mind or need help solving a complex problem? Let’s collaborate and turn your ideas into reality!
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
