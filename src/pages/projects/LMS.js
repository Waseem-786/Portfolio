import { useDarkMode } from "../../context/DarkModeContext";
import MetaHead from '../../components/MetaHead';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

export default function LMS() {
  const router = useRouter();
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-gray-200 text-gray-900 min-h-screen"}>
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

        {/* Introduction Section */}
        <motion.section 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
          className="text-center mb-10"
        >
          <h1 className="text-5xl font-extrabold mb-4">Learning Management System (LMS)</h1>
          <h2 className="text-2xl font-semibold text-blue-500">A Digital Learning Platform</h2>
        </motion.section>

        {/* Problem Statement and Solution */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className={`space-y-6 p-6 rounded-lg shadow-md ${
            darkMode ? "bg-gradient-to-r from-gray-800 to-gray-900" : "bg-gradient-to-r from-gray-100 to-gray-300"
          }`}
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-400">Problem Statement</h2>
          <p className="text-lg">
            Traditional learning management systems often suffer from a lack of <strong>real-time tracking</strong>, <strong>poor user interfaces</strong>, and <strong>inefficient role management</strong> for admins, students, and faculty.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-blue-400">Solution</h2>
          <ul className="list-disc list-inside space-y-3 text-lg mt-4">
            <li>Separate dashboards for <strong>Admins, Faculty, and Students</strong></li>
            <li>Efficient <strong>course management, student enrollment, and faculty assignments</strong></li>
            <li>Real-time tracking of <strong>class schedules and assignments</strong></li>
            <li>Secure and responsive <strong>profile management</strong></li>
          </ul>
        </motion.section>

        {/* Features with Images Inside */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className={`space-y-6 p-6 rounded-lg shadow-md mt-10 ${
            darkMode ? "bg-gray-800" : "bg-gray-100"
          }`}
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-400">Key Features</h2>

          {[
            { title: "Home Page", description: "Landing page with navigation to portal and key LMS sections.", image: "/LMS/Home.png" },
            { title: "Portal Page", description: "User role selection: Admin, Faculty, or Student.", image: "/LMS/Portal.png" },
            { title: "Admin Dashboard", description: "Manage accounts, courses, and student enrollments.", image: "/LMS/Admin_Dashboard.png" },
            { title: "Faculty Dashboard", description: "Manage assigned classes and track student progress.", image: "/LMS/Faculty_Dashboard.png" },
            { title: "Student Dashboard", description: "View enrolled courses and class schedules.", image: "/LMS/Student_Dashboard.png" },
            { title: "Course Management", description: "Admins can create, edit, and assign courses.", image: "/LMS/Course_Management.png" },
          ].map((feature, index) => (
            <div key={index} className="">
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <p className="text-lg mt-2">{feature.description}</p>
              <img src={feature.image} alt={feature.title} className="rounded-lg shadow-lg mx-auto mt-4 max-w-5xl" />
            </div>
          ))}
        </motion.section>

        {/* ERD Section */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className={`mt-10 p-6 rounded-lg shadow-md ${
            darkMode ? "bg-gray-800" : "bg-gray-100"
          }`}
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-400 text-center">
            Entity-Relationship Diagram (ERD)
          </h2>
          <p className="text-lg text-center">
            The following ERD represents the database schema of our Learning Management System.
          </p>
          <div className="flex justify-center mt-6">
            <img 
              src="/LMS/ERD.png"
              alt="ERD Diagram of LMS" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </motion.section>

        {/* Demo Video */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className={`mt-10 p-6 rounded-lg shadow-md ${
            darkMode ? "bg-gray-800" : "bg-gray-100"
          }`}
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-400">Demo Video</h2>
          <video controls className="w-full rounded-lg shadow-lg">
            <source src="/LMS/LMSVideo.mp4" type="video/mp4" />
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
          href="https://github.com/Waseem-786/DB_Project"
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
