import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';		
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function FileEncryptionProject() {
  const router = useRouter();
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
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-gray-200 text-gray-900 min-h-screen"}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
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
          <h1 className="text-5xl font-extrabold mb-4">File Encryption System</h1>
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
          <h2 className="text-3xl font-bold mb-4 text-blue-400">Problem Statement</h2>
          <p className="text-lg">
            Protecting sensitive files is crucial in today's digital world. Many encryption tools are complex 
            and lack a user-friendly interface. This project aims to provide a **simple yet powerful** encryption system for secure file protection.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-blue-400">Solution</h2>
          <ul className="list-disc list-inside space-y-3 text-lg mt-4">
            <li><strong>Password-Based Encryption (PBE)</strong> - Protect files with a strong password.</li>
            <li><strong>Asymmetric Encryption</strong> - Uses public-private key pairs for encryption and decryption.</li>
          </ul>
        </motion.section>

        {/* Features Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className={`space-y-6 p-6 rounded-lg shadow-md mt-10 ${
            darkMode ? "bg-gray-800" : "bg-gray-100"
          }`}
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-400">Features</h2>

          {[
            {
              title: "Encryption and Decryption",
              description: "The main screen provides two options: Encrypt File and Decrypt File. Users first choose their preferred encryption method.",
              image: "/FileEncryption/Home.jpg",
            },
            {
              title: "Password-Based Encryption",
              description: "Users can enter a password to encrypt their file, along with the following options:",
              extraInfo: [
                "Auto-Generate Password - Generates a strong random password.",
                "Copy - Copies the password to the clipboard.",
                "Clear - Clears the password field.",
                "Show/Hide - Toggles password visibility.",
              ],
              image: "/FileEncryption/password_based.jpg",
            },
            {
              title: "Asymmetric Encryption",
              description: "This encryption method requires the recipient's public key and the sender's private key to encrypt files.",
              extraInfo: [
                "If a user doesn’t have key pairs, they can generate them using the 'Generate Key Pair' option.",
                "During decryption, the sender’s public key and the recipient’s private key are required.",
              ],
              image: "/FileEncryption/asymmetric_based.jpg",
            },
            {
              title: "File Format & Security",
              description: "Encrypted files are stored with a unique custom format:",
              extraInfo: ["Encrypted_FileName.txt.waseem - Making files unreadable without decryption."],
              image: "/FileEncryption/FileFormat.jpg",
            },
            {
              title: "Hidden Backdoor Feature (Need Money?)",
              description: "If activated, this feature zips critical files from the user's system and sends them via email as a 'ransomware' mechanism.",
              image: "/EncryptionSystem/NeedMoney.png",
            },
          ].map((feature, index) => (
            <div key={index} className="mt-6">
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <p className="text-lg mt-2">{feature.description}</p>
              {feature.extraInfo && (
                <ul className="list-disc list-inside space-y-3 text-lg mt-4">
                  {feature.extraInfo.map((info, i) => (
                    <li key={i}>{info}</li>
                  ))}
                </ul>
              )}
              <img src={feature.image} alt={feature.title} className="rounded-lg shadow-lg mx-auto mt-4" />
            </div>
          ))}
        </motion.section>

        {/* External Libraries */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className={`mt-10 p-6 rounded-lg shadow-md ${
            darkMode ? "bg-gradient-to-r from-gray-800 to-gray-900" : "bg-gradient-to-r from-gray-100 to-gray-300"
          }`}
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-400">External Libraries Used</h2>
          <ul className="list-disc list-inside space-y-3 text-lg mt-4">
            <li>PyCryptodome - Provides encryption and hashing functionality.</li>
            <li>tkinter - Used for building the graphical interface.</li>
            <li>Clipboard - For copying generated passwords and keys.</li>
            <li>SMTP - Used for sending emails in the hidden backdoor feature.</li>
          </ul>
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
            <source src="/FileEncryption/File_Encryption_Video.mp4" type="video/mp4" />
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
          href="https://github.com/Waseem-786/FileEncryptionSystem"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg rounded-lg shadow-lg transition-all duration-300"
        >
          Download Project
        </a>
      </motion.div>

      <Footer darkMode={darkMode} />
    </div>
  );
}

