import { useDarkMode } from "../../context/DarkModeContext";
import MetaHead from '../../components/MetaHead';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

export default function RestaurantManagementSystem() {
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

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-5xl font-extrabold mb-4">Restaurant Management System (RMS)</h1>
          <h2 className="text-2xl font-semibold text-blue-500">Project Overview</h2>
        </motion.div>

        {/* Problem Statement and Solution */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className={`space-y-6 p-6 rounded-lg shadow-md ${
            darkMode ? "bg-gradient-to-r from-gray-800 to-gray-900" : "bg-gradient-to-r from-gray-100 to-gray-300"
          }`}
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-400">Why We Built RMS</h2>
          <p className="text-lg">Managing restaurant operations can be challenging and prone to human errors. With RMS, we aim to simplify operations like order-taking, billing, and table management through automation and an intuitive user interface.</p>

          <h2 className="text-3xl font-bold mb-4 text-blue-400">Problem Statement</h2>
          <p className="text-lg">Traditional restaurant management involves manual processes that lead to inefficiencies, mismanagement of orders, and billing errors. This results in a poor customer experience and increased workload for staff.</p>

          <h2 className="text-3xl font-bold mb-4 text-blue-400">Solution</h2>
          <p className="text-lg">RMS provides an automated, user-friendly system that allows staff to manage orders, calculate bills, and handle both dine-in and takeaway options with ease. It ensures accuracy, efficiency, and a smoother workflow.</p>
        </motion.section>

        {/* External Libraries */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className={`mt-10 p-6 rounded-lg shadow-md ${
            darkMode ? "bg-gradient-to-r from-gray-800 to-gray-900" : "bg-gradient-to-r from-gray-100 to-gray-300"
          }`}
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-400">External Libraries Used</h2>
          <ul className="list-disc list-inside space-y-3 text-lg mt-4">
            <li>KControls - For UI elements and transitions.</li>
            <li>KGradientPanel - For gradient panel effects.</li>
          </ul>
        </motion.section>

        {/* Features Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className={`space-y-6 p-6 rounded-lg shadow-md mt-10 ${
            darkMode ? "bg-gray-800" : "bg-gray-100"
          }`}
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-400">Features</h2>

          {[
            {
              title: "User Signup and Login",
              description: "Secure signup and login options for authorized users to access the system.",
              images: ["/RMS/Signup.jpg", "/RMS/Login.jpg"],
            },
            {
              title: "Select Dine-In or Takeaway",
              description: "Allows users to choose between Dine-In and Takeaway. For Dine-In, users can specify the number of people and table number.",
              images: ["/RMS/Order_Type.jpg", "/RMS/No_of_People.jpg"],
            },
            {
              title: "Dashboard (Menu)",
              description: "Categorized menu options like Chinese, BBQ, Beverages, etc., displayed on a user-friendly dashboard.",
              images: ["/RMS/Dashboard.jpg"],
            },
            {
              title: "Bill Calculation",
              description: "Automatically calculates the bill and remaining amount after entering the cash received.",
              images: ["/RMS/Bill.jpg"],
            },
          ].map((feature, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <p className="text-lg mt-2">{feature.description}</p>
              <div className={`grid grid-cols-1 ${feature.images.length > 1 ? "md:grid-cols-2" : ""} gap-4`}>
                {feature.images.map((image, imgIndex) => (
                  <img key={imgIndex} src={image} alt={feature.title} className="rounded-lg shadow-lg mx-auto" />
                ))}
              </div>
            </div>
          ))}
        </motion.section>

        {/* Video Section */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className={`mt-10 p-6 rounded-lg shadow-md ${
            darkMode ? "bg-gray-800" : "bg-gray-100"
          }`}
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-400">Demo Video</h2>
          <video controls className="w-full rounded-lg shadow-lg">
            <source src="/RMS/RMS_Video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.section>
      </main>

      {/* Sticky Download Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="fixed bottom-5 right-5"
      >
        <a
          href="https://github.com/Waseem-786/Restaurant-Management-System.git"
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

