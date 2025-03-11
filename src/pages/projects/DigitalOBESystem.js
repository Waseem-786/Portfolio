import { useDarkMode } from "../../context/DarkModeContext";
import MetaHead from '../../components/MetaHead';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

export default function DigitalOBESystem() {
  const router = useRouter();
  const { darkMode, toggleDarkMode } = useDarkMode();

  
  return (
    <div className={`transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      <MetaHead/>
      <Navbar/>

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
          <h1 className="text-5xl font-extrabold mb-4">Digital OBE System</h1>
          <h2 className="text-2xl font-semibold text-blue-500">Project Overview</h2>
        </motion.div>

        {/* Content Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className={`space-y-6 p-6 rounded-lg shadow-md ${darkMode ? "bg-gradient-to-r from-gray-800 to-gray-900" : "bg-gradient-to-r from-white to-gray-200"}`}
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-400">Problem Statement</h2>
          <p className="text-lg">
            Many educational institutions struggle with manual assessment processes, inaccurate CLO-PLO mapping,
            and inefficient accreditation workflows. This results in administrative overhead, inconsistencies in
            quality assurance, and a lack of digital tools for educators to efficiently create and manage assessments.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-blue-400">Proposed Solution</h2>
          <p className="text-lg">
            The Digital OBE System is a web-based platform designed to streamline course outline creation, assessment
            management, and accreditation approval processes. It ensures CLOs, PLOs, and PEOs are properly mapped,
            reducing paperwork and enhancing efficiency.
          </p>
        </motion.section>

        {/* Key Features */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className={`space-y-6 p-6 rounded-lg shadow-md mt-10 ${darkMode ? "bg-gradient-to-r from-gray-800 to-gray-900" : "bg-gradient-to-r from-white to-gray-200"}`}
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-400">Key Features</h2>
          <ul className="list-disc list-inside space-y-3 text-lg">
            <li>Secure authentication & role-based access control</li>
            <li>Dynamic mapping of CLOs, PLOs, and PEOs</li>
            <li>Automated assessment creation & management</li>
            <li>Digitalized accreditation approval process</li>
            <li>Real-time analytics and reporting for educators</li>
          </ul>
        </motion.section>

        {/* Technology Stack */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className={`p-6 rounded-lg shadow-md mt-10 ${darkMode ? "bg-gradient-to-r from-gray-800 to-gray-900" : "bg-gradient-to-r from-white to-gray-200"}`}
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-400">Technology Stack</h2>
          <ul className="list-disc list-inside space-y-3 text-lg">
            <li>Frontend: Flutter (for web & mobile UI)</li>
            <li>Backend: Django Rest Framework (DRF) for API services</li>
            <li>Database: MongoDB for structured data storage</li>
            <li>Authentication: Role-based access control</li>
            <li>Cloud-based hosting for scalability</li>
          </ul>
        </motion.section>

        {/* Demo Video */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className={`p-6 rounded-lg shadow-md mt-10 ${darkMode ? "bg-gradient-to-r from-gray-800 to-gray-900" : "bg-gradient-to-r from-gray-100 to-gray-200"}`}
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-400">Demo Video</h2>
          <video controls className="w-full max-w-3xl mx-auto rounded-lg shadow-lg">
            <source src="/FYP/FYP_Video.mp4" type="video/mp4" />
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
          href="https://github.com/Waseem-786/OBE-System-App"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg rounded-lg shadow-lg transition-all duration-300"
        >
          Download Project
        </a>
      </motion.div>

      <Footer/>

    </div>
  );
}

