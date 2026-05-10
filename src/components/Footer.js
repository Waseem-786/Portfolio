import { useDarkMode } from "../context/DarkModeContext";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FiMail, FiArrowUpRight } from "react-icons/fi";

const NAV = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Projects", link: "/projects" },
  { name: "Certificates", link: "/certificates" },
  { name: "Contact", link: "/contact" },
];

const SOCIAL = [
  { icon: <FaGithub size={18} />, link: "https://github.com/Waseem-786", label: "GitHub" },
  { icon: <FaLinkedin size={18} />, link: "https://www.linkedin.com/in/WaseemShahzad", label: "LinkedIn" },
  { icon: <FaInstagram size={18} />, link: "https://www.instagram.com/waseeemshahzad/", label: "Instagram" },
];

export default function Footer() {
  const { darkMode } = useDarkMode();

  return (
    <footer
      className={`relative overflow-hidden ${
        darkMode ? "bg-gray-950 text-gray-300 border-t border-white/5" : "bg-white text-gray-700 border-t border-gray-200"
      }`}
    >
      {/* Decorative gradient glow */}
      <div className="absolute inset-x-0 -top-20 h-40 bg-brand-gradient opacity-10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-gradient text-white font-bold text-sm shadow-glow">
                WS
              </span>
              <span className={`font-semibold tracking-tight ${darkMode ? "text-white" : "text-gray-900"}`}>
                Waseem<span className="gradient-text">.dev</span>
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed">
              Software engineer building scalable backends, REST APIs, and reliable banking solutions with Oracle Flexcube.
            </p>
            <a
              href="mailto:engrwaseemshahzad134@gmail.com"
              className={`mt-5 inline-flex items-center gap-2 text-sm font-medium ${
                darkMode ? "text-white hover:text-blue-400" : "text-gray-900 hover:text-blue-600"
              }`}
            >
              <FiMail /> engrwaseemshahzad134@gmail.com
              <FiArrowUpRight />
            </a>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <h3 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
              Navigate
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV.map((item) => (
                <li key={item.link}>
                  <Link
                    href={item.link}
                    className={`transition-colors ${
                      darkMode ? "hover:text-blue-400" : "hover:text-blue-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-4">
            <h3 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
              Connect
            </h3>
            <div className="flex items-center gap-3">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`flex items-center justify-center w-10 h-10 rounded-full transition-all ${
                    darkMode
                      ? "bg-white/5 hover:bg-brand-gradient hover:text-white text-gray-300"
                      : "bg-gray-100 hover:bg-brand-gradient hover:text-white text-gray-700"
                  }`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <p className="mt-6 text-xs leading-relaxed opacity-70">
              Available for freelance projects and consulting engagements.
            </p>
          </div>
        </div>

        <div
          className={`mt-12 pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-3 text-xs ${
            darkMode ? "border-white/5 text-gray-500" : "border-gray-200 text-gray-500"
          }`}
        >
          <p>© {new Date().getFullYear()} Waseem Shahzad. All rights reserved.</p>
          <p>
            Built with <span className="gradient-text font-semibold">Next.js</span> &{" "}
            <span className="gradient-text font-semibold">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
