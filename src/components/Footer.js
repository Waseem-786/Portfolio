import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer({ darkMode }) {
  return (
    <footer className={`py-8 transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900 shadow-lg"}`}>
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Brand Name & Copyright */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>Waseem Shahzad</h2>
          <p className={`text-sm mt-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h3 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>Quick Links</h3>
          <ul className="mt-2 space-y-1">
            <li><Link href="/" className={`${darkMode ? "text-gray-400 hover:text-blue-400" : "text-gray-700 hover:text-blue-600"}`}>Home</Link></li>
            <li><Link href="/about" className={`${darkMode ? "text-gray-400 hover:text-blue-400" : "text-gray-700 hover:text-blue-600"}`}>About</Link></li>
            <li><Link href="/projects" className={`${darkMode ? "text-gray-400 hover:text-blue-400" : "text-gray-700 hover:text-blue-600"}`}>Projects</Link></li>
            <li><Link href="/contact" className={`${darkMode ? "text-gray-400 hover:text-blue-400" : "text-gray-700 hover:text-blue-600"}`}>Contact</Link></li>
            <li><Link href="/certificates" className={`${darkMode ? "text-gray-400 hover:text-blue-400" : "text-gray-700 hover:text-blue-600"}`}>Certificates</Link></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="text-center">
          <h3 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>Follow Me</h3>
          <div className="flex justify-center md:justify-start mt-2 space-x-4">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} className={`${darkMode ? "text-gray-400 hover:text-blue-400" : "text-gray-700 hover:text-blue-600"} transition`} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} className={`${darkMode ? "text-gray-400 hover:text-blue-400" : "text-gray-700 hover:text-blue-600"} transition`} />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} className={`${darkMode ? "text-gray-400 hover:text-blue-400" : "text-gray-700 hover:text-blue-600"} transition`} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
