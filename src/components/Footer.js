import { useDarkMode } from "../context/DarkModeContext";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <footer
      className={`py-8 transition-all duration-300 shadow-t-lg ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900 shadow-lg"
      }`}
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Brand Name & Copyright */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
            Waseem Shahzad
          </h2>
          <p className={`text-sm mt-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h3 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>
            Quick Links
          </h3>
          <ul className="mt-2 space-y-1">
            {[
              { name: "Home", link: "/" },
              { name: "About", link: "/about" },
              { name: "Projects", link: "/projects" },
              { name: "Contact", link: "/contact" },
              { name: "Certificates", link: "/certificates" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  className={`transition-all duration-300 ${
                    darkMode ? "text-gray-400 hover:text-blue-400" : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="text-center">
          <h3 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>
            Follow Me
          </h3>
          <div className="flex justify-center md:justify-start mt-2 space-x-4">
            {[
              { icon: <FaGithub size={24} />, link: "https://github.com/Waseem-786" },
              { icon: <FaLinkedin size={24} />, link: "https://www.linkedin.com/in/waseem-shahzad-b4854522a" },
              { icon: <FaInstagram size={24} />, link: "https://www.instagram.com/waseeemshahzad/" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-all duration-300 ${
                  darkMode ? "text-gray-400 hover:text-blue-400" : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
