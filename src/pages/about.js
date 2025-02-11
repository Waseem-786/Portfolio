import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiMapPin, FiGlobe, FiBriefcase } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function About() {
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
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className="container mx-auto p-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-5xl font-extrabold text-blue-500">Waseem Shahzad</h1>
          <h2 className={`text-2xl font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            Software Engineer | Application Consultant
          </h2>
        </motion.div>

        {/* Contact Information Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 rounded-lg shadow-lg ${
            darkMode ? "bg-gradient-to-r from-gray-800 to-gray-900" : "bg-gradient-to-r from-blue-100 to-blue-300"
          }`}
        >
          {[
            { icon: <FiMail />, text: "engrwaseemshahzad134@gmail.com" },
            { icon: <FiPhone />, text: "+92 3419648099" },
            { icon: <FiGithub />, text: "Waseem-786" },
            { icon: <FiBriefcase />, text: "Freelancer @ Studypool", link: "https://www.studypool.com/MalikNajaf?aid=najafsays123" },
            { icon: <FiLinkedin />, text: "LinkedIn Profile", link: "https://www.linkedin.com/in/waseem-shahzad-b4854522a" },
            { icon: <FiMapPin />, text: "Milat Town, Faisalabad" },
            { icon: <FiGlobe />, text: "usvisahelp.net", link: "https://usvisahelp.net" },
            { icon: <FiGlobe />, text: "tvonnet.co", link: "https://tvonnet.co" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-4 p-4 rounded-lg transition-all cursor-pointer hover:bg-opacity-50"
            >
              <div className="text-blue-500 text-2xl">{item.icon}</div>
              {item.link ? (
                <a href={item.link} target="_blank" rel="noreferrer" className="hover:underline">
                  {item.text}
                </a>
              ) : (
                <span>{item.text}</span>
              )}
            </motion.div>
          ))}
        </motion.section>

        {/* Education Section */}
        <motion.section initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.5 }} className="mt-10">
          <h2 className="text-3xl font-bold text-blue-500">Education</h2>
          <ul className="list-disc list-inside space-y-3 text-lg">
            <li><strong>Bachelor's in Software Engineering</strong> - 3.62 CGPA (NUST University)</li>
            <li><strong>Intermediate (Pre-Engineering)</strong> - KIPS College Faisalabad</li>
            <li><strong>Matriculation</strong> - Hassan Bin Sabet High School, Science</li>
          </ul>
        </motion.section>

        {/* Experience Section */}
        <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.5 }} className="mt-10">
          <h2 className="text-3xl font-bold text-blue-500">Professional Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold">Techlogix</h3>
              <p className="text-gray-400">Jul 2024 - Present</p>
              <p className="mt-2 text-lg">Application Consultant: Supporting various banks by resolving issues in Oracle Flexcube, writing optimized PL/SQL queries, and testing performance improvements.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">eARMS GHQ, C4I Directorate</h3>
              <p className="text-gray-400">Jul 2023 - Sep 2023</p>
              <p className="mt-2 text-lg">Developed a chatbot in Oracle Apex using machine learning, implemented an advanced attendance system, and contributed to internal software improvements.</p>
            </div>
          </div>
        </motion.section>

        {/* Hobbies Section */}
        <motion.section initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9, duration: 0.5 }} className="mt-10">
          <h2 className="text-3xl font-bold text-blue-500">Hobbies</h2>
          <p className="text-lg">Exploring creative projects, problem-solving on LeetCode, and constantly learning new technologies.</p>
        </motion.section>

        {/* Extracurricular Activities Section */}
        <motion.section initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.1, duration: 0.5 }} className="mt-10">
          <h2 className="text-3xl font-bold text-blue-500">Extracurricular Activities</h2>
          <ul className="list-disc list-inside space-y-3 text-lg">
            <li>Active cricket player</li>
            <li>Participant in hackathons and coding challenges</li>
            <li>Mentor for junior developers at university programming club</li>
          </ul>
        </motion.section>
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
}

