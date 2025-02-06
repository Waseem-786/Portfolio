import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Brand Name & Copyright */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-2xl font-bold">Waseem Shahzad</h2>
          <p className="text-gray-400 text-sm mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-1">
            <li><Link href="/" className="text-gray-400 hover:text-blue-400">Home</Link></li>
            <li><Link href="/about" className="text-gray-400 hover:text-blue-400">About</Link></li>
            <li><Link href="/projects" className="text-gray-400 hover:text-blue-400">Projects</Link></li>
            <li><Link href="/contact" className="text-gray-400 hover:text-blue-400">Contact</Link></li>
            <li><Link href="/certificates" className="text-gray-400 hover:text-blue-400">Certificates</Link></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="text-center">
          <h3 className="text-lg font-semibold">Follow Me</h3>
          <div className="flex justify-center md:justify-start mt-2 space-x-4">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} className="text-gray-400 hover:text-blue-400 transition" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} className="text-gray-400 hover:text-blue-400 transition" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} className="text-gray-400 hover:text-blue-400 transition" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
