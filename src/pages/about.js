import { useDarkMode } from "../context/DarkModeContext";
import Navbar from "../components/Navbar";
import MetaHead from "../components/MetaHead";
import Footer from "../components/Footer";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiMapPin, FiGlobe, FiBriefcase } from "react-icons/fi";
import { FaUsers, FaCogs, FaServer, FaDatabase, FaTools, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}>
      <MetaHead/>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className="container mx-auto p-8">
        {/* Header Section */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-10">
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
            darkMode ? "bg-gradient-to-r from-gray-800 to-gray-900" : "bg-gradient-to-r from-gray-200 to-gray-300"
          }`}
        >
          {[
            { icon: <FiMail />, text: "engrwaseemshahzad134@gmail.com", link: "mailto:engrwaseemshahzad134@gmail.com?subject=Portfolio Inquiry" },
            { icon: <FiPhone />, text: "+92 3419648099", link: "tel:+923419648099" },
            { icon: <FiGithub />, text: "Waseem-786", link: "https://github.com/Waseem-786" },
            { icon: <FiBriefcase />, text: "Freelancer @ Studypool", link: "https://www.studypool.com/MalikNajaf?aid=najafsays123" },
            { icon: <FiLinkedin />, text: "LinkedIn Profile", link: "https://www.linkedin.com/in/waseem-shahzad-b4854522a" },
            { icon: <FiMapPin />, text: "Milat Town, Faisalabad" },
            { icon: <FiGlobe />, text: "usavisahelp.net", link: "https://usavisahelp.net" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-4 p-4 rounded-lg transition-all cursor-pointer hover:bg-opacity-50"
            >
              <div className="text-blue-500 text-2xl">{item.icon}</div>
              {item.link ? (
                <a href={item.link} target="_blank" rel="noreferrer" className="text-sm md:text-base break-all hover:underline">
                  {item.text}
                </a>
              ) : (
                <span className="text-sm md:text-base break-all">{item.text}</span>
              )}
            </motion.div>
          ))}
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className={`mt-10 p-10 rounded-lg shadow-lg transition-all duration-500 ${
            darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-900"
          }`}
        >
          <h2 className="text-4xl font-extrabold text-blue-500 text-center mb-6">Skills & Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Frontend Development", icon: <FaCode />, skills: ["JavaScript", "Flutter", "Tailwind CSS", "Bootstrap", "WordPress"] },
              { title: "Backend Development", icon: <FaServer />, skills: ["Python", "Django", "Django Rest Framework", "PHP", "APIs Integration"] },
              { title: "Databases", icon: <FaDatabase />, skills: ["MongoDB", "MySQL", "MSSQL", "Oracle", "PL/SQL"] },
              { title: "DevOps & Tools", icon: <FaTools />, skills: ["Docker", "Firebase", "Git (Version Control)"] },
              { title: "Soft Skills", icon: <FaUsers />, skills: ["Debugging", "Communication", "Leadership", "Management"] },
              { title: "Special Expertise", icon: <FaCogs />, skills: ["Oracle Flexcube Consultant", "Problem Solving"] },
            ].map((category, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-6 rounded-lg shadow-lg transition-all duration-300 ${
                  darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-white hover:bg-gray-300"
                }`}
              >
                <div className="text-center">
                  <div className="text-blue-500 text-5xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                  <div className="mt-4 flex flex-wrap justify-center space-x-2">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full m-1"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ delay: 0.5, duration: 0.5 }} 
          className={`mt-10 p-8 rounded-lg shadow-lg transition-all duration-500 ${
            darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-900"
          }`}
        >
          <h2 className="text-4xl font-extrabold text-blue-500 text-center mb-6">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { degree: "Bachelor's in Software Engineering", institution: "NUST University", cgpa: "3.62 CGPA", icon: "🎓" },
              { degree: "Intermediate (Pre-Engineering)", institution: "KIPS College Faisalabad", icon: "🏫" },
              { degree: "Matriculation (Science)", institution: "Hassan Bin Sabet High School", icon: "📚" },
            ].map((edu, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className={`p-6 rounded-lg shadow-lg transition-all ${
                  darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-white hover:bg-gray-300"
                }`}
              >
                <div className="text-5xl text-blue-500 text-center mb-4">{edu.icon}</div>
                <h3 className="text-xl font-bold text-blue-500 text-center">{edu.degree}</h3>
                <p className="text-lg text-center">{edu.institution}</p>
                {edu.cgpa && <p className="text-center text-gray-500">{edu.cgpa}</p>}
              </motion.div>
            ))}
          </div>
        </motion.section>
        

        {/* Experience Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.7, duration: 0.5 }} 
          className={`mt-10 p-8 rounded-lg shadow-lg transition-all duration-500 ${
            darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-900"
          }`}
        >
          <h2 className="text-4xl font-extrabold text-blue-500 text-center mb-6">Professional Experience</h2>
          <div className="space-y-8">
            {[
              {
                company: "Techlogix",
                duration: "Jul 2024 - Present",
                role: "Application Consultant",
                description: "Supporting various banks by resolving issues in Oracle Flexcube, writing optimized PL/SQL queries, debugging, and testing performance improvements.",
              },
              {
                company: "eARMS GHQ, C4I Directorate",
                duration: "Jul 2023 - Sep 2023",
                role: "Oracle Apex Development Intern",
                description: "Developed a chatbot using machine learning, implemented an advanced attendance system, and optimized internal database processes.",
              },
              {
                company: "At Law Call Center",
                duration: "2021 (2 Months)",
                role: "Customer Support Representative",
                description: "Worked in a professional call center environment, assisting clients, handling queries, and improving communication and problem-solving skills.",
              },
            ].map((experience, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className={`p-6 rounded-lg shadow-lg transition-all ${
                  darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-white hover:bg-gray-300"
                }`}
              >
                <h3 className="text-xl font-bold text-blue-500">{experience.company}</h3>
                <p className="text-gray-500">{experience.duration}</p>
                <h4 className="text-lg font-semibold mt-2">{experience.role}</h4>
                <p className="mt-2 text-lg">{experience.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        {/* Hobbies Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className={`mt-10 p-8 rounded-lg shadow-lg transition-all duration-500 ${
            darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-900"
          }`}
        >
          <h2 className="text-4xl font-extrabold text-blue-500 text-center mb-6">Hobbies, Interests & Extracurricular Activities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Coding Challenges", emoji: "💻", description: "I love solving problems on LeetCode, CodeForces, and HackerRank to sharpen my skills." },
              { title: "Watching Movies & Series", emoji: "🎬", description: "Big fan of Sci-Fi, and Thriller genres. I enjoy thought-provoking movies and binge-worthy series." },
              { title: "Tech Research", emoji: "🔍", description: "Exploring the latest trends in AI, Blockchain, and Cloud Computing fascinates me." },
              { title: "Gaming", emoji: "🎮", description: "I enjoy playing competitive strategy and multiplayer games in my free time." },
              { title: "Cricket", emoji: "🏏", description: "Cricket is my passion! I actively play and follow international matches." },
              { title: "Music & Podcasts", emoji: "🎵", description: "I listen to tech podcasts and enjoy a mix of instrumental and electronic music." },
            ].map((hobby, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className={`p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:shadow-xl cursor-pointer ${
                  darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-white hover:bg-gray-300"
                }`}
              >
                <div className="text-center">
                  <div className="text-5xl mb-4">{hobby.emoji}</div>
                  <h3 className="text-xl font-bold">{hobby.title}</h3>
                  <p className="mt-2 text-lg">{hobby.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>


      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
}
