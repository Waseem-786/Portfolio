import { useDarkMode } from "../context/DarkModeContext";
import MetaHead from "../components/MetaHead";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiMessageSquare } from "react-icons/fi";
import { FaUtensils, FaBook, FaLock, FaMusic, FaDatabase } from "react-icons/fa";

const PROJECTS = [
  {
    name: "Learning Management System",
    description:
      "A complete LMS featuring courses, faculty/student dashboards, and admin tooling. Built end-to-end with PHP, MySQL, and a clean front-end stack.",
    image: "/LMS/Home.png",
    tags: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    link: "/projects/LMS",
    repo: "https://github.com/Waseem-786",
    icon: <FaBook />,
    accent: "from-emerald-400 to-teal-500",
  },
  {
    name: "Digital OBE System",
    description:
      "Final year project — a digital outcome-based education platform with a Flutter mobile app and Django backend, including assessment workflows.",
    placeholder: true,
    tags: ["Flutter", "Django", "REST API", "PostgreSQL"],
    link: "/projects/DigitalOBESystem",
    repo: "https://github.com/Waseem-786",
    icon: <FaDatabase />,
    accent: "from-blue-500 to-indigo-600",
    featured: true,
  },
  {
    name: "Restaurant Management System",
    description:
      "Java desktop application built with JSwing for orders, table selection, billing, and customer management in a restaurant setting.",
    image: "/RMS/Dashboard.jpg",
    tags: ["Java", "JSwing", "MySQL"],
    link: "/projects/RMS",
    repo: "https://github.com/Waseem-786",
    icon: <FaUtensils />,
    accent: "from-orange-400 to-red-500",
  },
  {
    name: "File Encryption System",
    description:
      "Security-focused desktop tool implementing password-based and asymmetric file encryption schemes in Python with a clean UX.",
    image: "/FileEncryption/Home.jpg",
    tags: ["Python", "Cryptography", "Tkinter"],
    link: "/projects/FileEncryption",
    repo: "https://github.com/Waseem-786",
    icon: <FaLock />,
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    name: "Music Player",
    description:
      "Java JSwing music player with playlist management, track navigation, and a polished home/playlist UI.",
    image: "/MusicPlayer/HomePage.jpg",
    tags: ["Java", "JSwing"],
    link: "/projects/MusicPlayer",
    repo: "https://github.com/Waseem-786",
    icon: <FaMusic />,
    accent: "from-pink-500 to-rose-500",
  },
  {
    name: "Chat & Networking in LMS",
    description:
      "Real-time messaging and class-wide networking layer added on top of the LMS, using PHP and sockets for live delivery and presence.",
    placeholder: true,
    tags: ["PHP", "Sockets", "MySQL", "JavaScript"],
    link: "/projects/chat-networking",
    repo: "https://github.com/Waseem-786",
    icon: <FiMessageSquare />,
    accent: "from-cyan-500 to-blue-600",
  },
];

export default function Projects() {
  const { darkMode } = useDarkMode();

  return (
    <div className={darkMode ? "bg-gray-950 text-gray-200" : "bg-white text-gray-800"}>
      <MetaHead title="Projects — Waseem Shahzad" description="Selected projects: full-stack apps, banking systems, and engineering experiments." />
      <Navbar />

      <main className="relative">
        {/* Hero header */}
        <section className="relative overflow-hidden">
          <div className={`absolute inset-0 -z-10 ${darkMode ? "bg-grid-dark" : "bg-grid-light"}`} />
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] -z-10 blur-3xl rounded-full ${darkMode ? "bg-blue-700/30" : "bg-blue-300/40"}`} />

          <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12 text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`text-sm uppercase tracking-widest font-semibold ${darkMode ? "text-blue-400" : "text-blue-600"}`}
            >
              Selected Work
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
            >
              Things I've <span className="gradient-text">built</span>.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className={`mt-4 max-w-2xl mx-auto text-base lg:text-lg ${darkMode ? "text-gray-400" : "text-gray-600"}`}
            >
              Personal, academic, and freelance projects spanning web, mobile, banking, and security. Each one shipped end-to-end with care.
            </motion.p>
          </div>
        </section>

        {/* Projects grid */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {PROJECTS.map((p, i) => (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
                className={`group relative overflow-hidden rounded-2xl gradient-border transition-all duration-300 hover:-translate-y-1 ${
                  darkMode ? "bg-gray-900" : "bg-white"
                } ${p.featured ? "md:col-span-2" : ""}`}
              >
                {/* Image / Placeholder */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  {p.placeholder ? (
                    <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} flex items-center justify-center`}>
                      <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)", backgroundSize: "24px 24px" }} />
                      <div className="relative text-white text-7xl opacity-90">
                        {p.icon}
                      </div>
                    </div>
                  ) : (
                    <>
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className={`absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t ${darkMode ? "from-gray-900/80" : "from-white/40"} to-transparent pointer-events-none`} />
                    </>
                  )}
                  <div className={`absolute top-4 left-4 flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${p.accent} text-white shadow-lg z-10`}>
                    {p.icon}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 lg:p-7">
                  <h3 className="text-xl lg:text-2xl font-bold tracking-tight">{p.name}</h3>
                  <p className={`mt-2 text-sm leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                    {p.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className={`px-2.5 py-1 text-xs font-medium font-mono rounded-md ${
                          darkMode ? "bg-white/5 text-gray-300 border border-white/10" : "bg-gray-100 text-gray-700 border border-gray-200"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="mt-6 flex items-center gap-3">
                    <Link
                      href={p.link}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-brand-gradient hover:opacity-90 shadow-glow transition-opacity"
                    >
                      View Case Study <FiArrowUpRight />
                    </Link>
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border transition-colors ${
                          darkMode
                            ? "border-white/15 text-white hover:bg-white/5"
                            : "border-gray-300 text-gray-900 hover:bg-gray-50"
                        }`}
                      >
                        <FiGithub /> Source
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
