import { useDarkMode } from "../context/DarkModeContext";
import MetaHead from "../components/MetaHead";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiX, FiZoomIn, FiAward } from "react-icons/fi";

const CERTS = [
  { title: "Ramadan Contest 2021", issuer: "Student Nexus", image: "/Certificates/Student Nexus.jpg" },
  { title: "Version Control with Git", issuer: "Coursera", image: "/Certificates/Version Control.jpg" },
  { title: "Soft Skills Program", issuer: "Google", image: "/Certificates/Soft Skills by Google.jpg" },
  { title: "Python Programming", issuer: "Coursera", image: "/Certificates/Python.jpg" },
  { title: "Django Web Framework", issuer: "Meta", image: "/Certificates/Django.jpg" },
  { title: "APIs with Django REST Framework", issuer: "Meta", image: "/Certificates/DRF.jpg" },
  { title: "Sustainability E-Learning 2024", issuer: "Nestlé", image: "/Certificates/Nestle.jpg" },
  { title: "Pakistan Freelancers Association", issuer: "PFA", image: "/Certificates/Pakistan Freelancers Association.jpg" },
  { title: "Problem Solving (Basic)", issuer: "HackerRank", image: "/Certificates/problem_solving_basic certificate.jpg" },
];

export default function Certificates() {
  const { darkMode } = useDarkMode();
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <div className={darkMode ? "bg-gray-950 text-gray-200" : "bg-white text-gray-800"}>
      <MetaHead title="Certificates — Waseem Shahzad" description="Professional certifications and learning credentials." />
      <Navbar />

      <main className="relative">
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
              Credentials
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
            >
              My <span className="gradient-text">Certificates</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className={`mt-4 max-w-2xl mx-auto text-base lg:text-lg ${darkMode ? "text-gray-400" : "text-gray-600"}`}
            >
              Professional certifications and continuous-learning credentials across software engineering, soft skills, and freelancing.
            </motion.p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTS.map((cert, i) => (
              <motion.button
                key={cert.title}
                onClick={() => setActive(cert)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + (i % 3) * 0.08 }}
                className={`group relative text-left overflow-hidden rounded-2xl gradient-border transition-all hover:-translate-y-1 ${
                  darkMode ? "bg-gray-900" : "bg-white"
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 text-gray-900 text-sm font-semibold shadow-xl">
                      <FiZoomIn /> View
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-brand-gradient text-white shrink-0 shadow-glow">
                      <FiAward />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-base font-bold leading-tight">{cert.title}</h3>
                      <p className={`mt-1 text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{cert.issuer}</p>
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </section>
      </main>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl ${
                darkMode ? "bg-gray-900" : "bg-white"
              }`}
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute top-3 right-3 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-colors"
              >
                <FiX size={18} />
              </button>
              <div className="relative w-full aspect-[4/3]">
                <Image src={active.image} alt={active.title} fill sizes="100vw" className="object-contain" />
              </div>
              <div className="p-5 border-t border-black/5 dark:border-white/5">
                <h3 className="text-lg font-bold">{active.title}</h3>
                <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{active.issuer}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
