import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiMapPin, FiGlobe, FiBriefcase } from "react-icons/fi";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="dark:bg-gray-900 dark:text-white min-h-screen">
      <Navbar />
      <main className="container mx-auto p-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
          className="text-center mb-10"
        >
          <h1 className="text-5xl font-extrabold mb-4 text-blue-400">
            Waseem Shahzad
          </h1>
          <h2 className="text-2xl font-semibold text-gray-300">Software Engineer | Application Consultant</h2>
        </motion.div>

        {/* Contact Information Section */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.3, duration: 0.5 }} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg shadow-md"
        >
          {[{
            icon: <FiMail className="text-blue-500 text-xl" />, text: "engrwaseemshahzad134@gmail.com"
          }, {
            icon: <FiPhone className="text-blue-500 text-xl" />, text: "+92 3419648099"
          }, {
            icon: <FiGithub className="text-blue-500 text-xl" />, text: "Waseem-786"
          }, {
            icon: <FiBriefcase className="text-blue-500 text-xl" />, text: "Studypool Freelancer", link: "https://www.studypool.com/MalikNajaf?aid=najafsays123"
          }, {
            icon: <FiLinkedin className="text-blue-500 text-xl" />, text: "linkedin.com/in/waseem-shahzad-b4854522a", link: "https://www.linkedin.com/in/waseem-shahzad-b4854522a"
          }, {
            icon: <FiMapPin className="text-blue-500 text-xl" />, text: "Milat Town, Faisalabad"
          }, {
            icon: <FiGlobe className="text-blue-500 text-xl" />, text: "usvisahelp.net", link: "https://usvisahelp.net"
          }, {
            icon: <FiGlobe className="text-blue-500 text-xl" />, text: "tvonnet.co", link: "https://tvonnet.co"
          }].map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              {item.icon}
              {item.link ? (
                <a href={item.link} target="_blank" rel="noreferrer" className="hover:underline">
                  {item.text}
                </a>
              ) : (
                <span className="hover:underline">{item.text}</span>
              )}
            </div>
          ))}
        </motion.section>
        
        {/* Education Section */}
        <motion.section 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ delay: 0.5, duration: 0.5 }} 
          className="mt-10"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-400">Education</h2>
          <ul className="list-disc list-inside space-y-3 text-lg">
            <li>
              <strong>Bachelor's in Software Engineering</strong> - 3.62 CGPA (NUST University)
            </li>
            <li>
              <strong>Intermediate (Pre-Engineering)</strong> - KIPS College Faisalabad
            </li>
            <li>
              <strong>Matriculation</strong> - Hassan Bin Sabet High School, Science
            </li>
          </ul>
        </motion.section>

        {/* Professional Experience Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.7, duration: 0.5 }} 
          className="mt-10"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-400">Professional Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold">Techlogix</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Jul 2024 - Present</p>
              <p className="mt-2 text-lg">
                <strong>Application Consultant:</strong> Supporting Diifferent Banks by resolving post-production issues in Oracle Flexcube, writing efficient PL/SQL queries, debugging, testing, and optimizing system performance for CASA, Lending, and PDM modules.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">eARMS GHQ, C4I Directorate</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Jul 2023 - Sep 2023</p>
              <p className="mt-2 text-lg">
                <strong>Oracle Apex Development Intern:</strong> Developed a ChatBot Application in Oracle Apex using machine learning on Excel data, and implemented an efficient Attendance System, gaining hands-on experience in professional software development.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Hobbies Section */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.9, duration: 0.5 }} 
          className="mt-10"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-400">Hobbies</h2>
          <p className="text-lg">
            Creative projects, solving complex problems on LeetCode, and pursuing online courses to expand technical knowledge.
          </p>
        </motion.section>

        {/* Extracurricular Activities Section */}
        <motion.section 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ delay: 1.1, duration: 0.5 }} 
          className="mt-10"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-400">Extracurricular Activities</h2>
          <ul className="list-disc list-inside space-y-3 text-lg">
            <li>Cricket enthusiast and active player.</li>
            <li>Participated in coding challenges and hackathons.</li>
            <li>Member of university programming club, mentoring junior developers.</li>
          </ul>
        </motion.section>

        {/* Additional Highlights Section */}
        <motion.section 
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 1.3, duration: 0.5 }} 
          className="mt-10"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-400">Highlights</h2>
          <p className="text-lg">
            Successfully completed multiple freelance projects on platforms like Studypool, and contributed to open-source projects on GitHub.
          </p>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}