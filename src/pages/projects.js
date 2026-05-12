import { useDarkMode } from "../context/DarkModeContext";
import MetaHead from "../components/MetaHead";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { FiArrowUpRight, FiGithub, FiMessageSquare, FiZap, FiTool, FiFileText, FiArrowRight, FiStar } from "react-icons/fi";
import { FaUtensils, FaBook, FaLock, FaMusic, FaDatabase } from "react-icons/fa";

const PROJECTS = [
  {
    id: "querymind",
    name: "QueryMind",
    description:
      "AI-powered Oracle SQL Optimizer & Assistant. Introspects schemas (DDL, indexes, stats, constraints), generates AI-driven query rewrites benchmarked via MINUS, and surfaces a hand-built SVG flowchart of the execution plan.",
    image: "/QueryMind/portfolio-Hero-result.png",
    tags: ["Next.js 16", "React 19", "TypeScript", "PL/SQL", "Gemini API", "Claude API"],
    link: "/projects/QueryMind",
    repo: "https://github.com/Waseem-786/Query_Optimizer",
    icon: <FiZap />,
    accent: "from-amber-400 via-orange-500 to-rose-500",
    glow: "rgba(251, 146, 60, 0.45)",
    year: "2025",
    categories: ["2025", "AI", "Banking"],
    featured: true,
  },
  {
    id: "cum",
    name: "Customization Units Manager",
    description:
      "Cross-platform Electron + React + TypeScript desktop tool for FLEXCUBE deployment teams — diff detection, Monaco-based conflict resolver, auto-generated deployment scripts. Cut review effort by ~30 minutes per change.",
    mock: "cum",
    tags: ["Electron", "React", "TypeScript", "Monaco", "jsdiff"],
    link: "/projects/CustomizationUnitsManager",
    repo: "https://github.com/Waseem-786/Customization_Units_Manager",
    icon: <FiTool />,
    accent: "from-indigo-500 via-violet-500 to-fuchsia-500",
    glow: "rgba(139, 92, 246, 0.45)",
    year: "2025",
    categories: ["2025", "Banking", "Desktop"],
  },
  {
    id: "fbr",
    name: "FBR Invoice Integration",
    description:
      "Node.js client integrated with Pakistan's Federal Board of Revenue e-invoicing APIs — real-time submission, validation, and structured error handling for compliance and audit readiness.",
    mock: "fbr",
    tags: ["Node.js", "REST APIs", "FBR e-Invoicing"],
    link: "/projects/FBRInvoice",
    repo: "https://github.com/Waseem-786/FBR_Project",
    icon: <FiFileText />,
    accent: "from-emerald-500 via-teal-500 to-cyan-500",
    glow: "rgba(16, 185, 129, 0.45)",
    year: "2025",
    categories: ["2025", "Web"],
  },
  {
    id: "lms",
    name: "Learning Management System",
    description:
      "Complete LMS with role-based dashboards for Admins, Faculty, and Students — courses, enrollments, scheduling. Built end-to-end with PHP, MySQL, and a clean front-end stack.",
    image: "/LMS/Home.png",
    tags: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    link: "/projects/LMS",
    repo: "https://github.com/Waseem-786/DB_Project",
    icon: <FaBook />,
    accent: "from-emerald-400 to-teal-500",
    glow: "rgba(20, 184, 166, 0.4)",
    year: "2023",
    categories: ["Academic", "Web"],
  },
  {
    id: "obe",
    name: "Digital OBE System",
    description:
      "Final year project — an outcome-based education platform with a Flutter mobile app and Django backend, including AI-assisted course-outline generation mapped to learning outcomes.",
    mock: "obe",
    tags: ["Flutter", "Django", "REST API", "MongoDB"],
    link: "/projects/DigitalOBESystem",
    repo: "https://github.com/Waseem-786/OBE-System-App",
    icon: <FaDatabase />,
    accent: "from-blue-500 to-indigo-600",
    glow: "rgba(99, 102, 241, 0.4)",
    year: "2024",
    categories: ["Academic", "Web", "AI"],
  },
  {
    id: "rms",
    name: "Restaurant Management System",
    description:
      "Java JSwing desktop application for orders, table selection, dine-in/takeaway flows, and automated billing. End-to-end restaurant workflow.",
    image: "/RMS/Dashboard.jpg",
    tags: ["Java", "JSwing", "MySQL"],
    link: "/projects/RMS",
    repo: "https://github.com/Waseem-786/Restaurant-Management-System",
    icon: <FaUtensils />,
    accent: "from-orange-400 to-red-500",
    glow: "rgba(248, 113, 113, 0.4)",
    year: "2023",
    categories: ["Academic", "Desktop"],
  },
  {
    id: "fe",
    name: "File Encryption System",
    description:
      "Security-focused Python desktop tool implementing password-based and asymmetric file encryption schemes with a clean Tkinter UX.",
    image: "/FileEncryption/Home.jpg",
    tags: ["Python", "Cryptography", "Tkinter"],
    link: "/projects/FileEncryption",
    repo: "https://github.com/Waseem-786/FileEncryptionSystem",
    icon: <FaLock />,
    accent: "from-violet-500 to-fuchsia-500",
    glow: "rgba(217, 70, 239, 0.4)",
    year: "2023",
    categories: ["Academic", "Desktop"],
  },
  {
    id: "mp",
    name: "Music Player",
    description:
      "Java JSwing music player with playlist management, real-time metadata extraction, recent-song tracking, and MySQL persistence.",
    image: "/MusicPlayer/HomePage.jpg",
    tags: ["Java", "JSwing", "MySQL"],
    link: "/projects/MusicPlayer",
    repo: "https://github.com/Waseem-786/Music_Player",
    icon: <FaMusic />,
    accent: "from-pink-500 to-rose-500",
    glow: "rgba(244, 114, 182, 0.4)",
    year: "2023",
    categories: ["Academic", "Desktop"],
  },
  {
    id: "chat",
    name: "Chat & Networking in LMS",
    description:
      "Real-time messaging and class-wide networking layer added on top of the LMS — sockets for live delivery and presence, persistent history, threaded discussions.",
    mock: "chat",
    tags: ["PHP", "Sockets", "MySQL", "JavaScript"],
    link: "/projects/chat-networking",
    repo: "https://github.com/Waseem-786",
    icon: <FiMessageSquare />,
    accent: "from-cyan-500 to-blue-600",
    glow: "rgba(34, 211, 238, 0.4)",
    year: "2023",
    categories: ["Academic", "Web"],
  },
];

const FILTERS = ["All", "2025", "Banking", "AI", "Web", "Desktop", "Academic"];

/* ---------------- Product mocks (faux UI inside placeholder cards) ---------------- */

function WindowChrome({ tabLabel }) {
  return (
    <div className="window-chrome">
      <span className="window-dot bg-red-400" />
      <span className="window-dot bg-yellow-400" />
      <span className="window-dot bg-emerald-400" />
      {tabLabel && (
        <span className="ml-3 text-[10px] font-mono text-white/70 truncate">{tabLabel}</span>
      )}
    </div>
  );
}

function MockQueryMind() {
  return (
    <div className="relative w-full h-full bg-[#0f172a] flex flex-col">
      <WindowChrome tabLabel="querymind.app — optimize.sql" />
      <div className="flex-1 p-3 sm:p-4 font-mono text-[10px] sm:text-xs leading-relaxed">
        <div className="text-gray-500">-- Original query · 3.2s</div>
        <div className="mt-1">
          <span className="text-fuchsia-400">SELECT</span> <span className="text-emerald-400">DISTINCT</span> c.*
        </div>
        <div><span className="text-fuchsia-400">FROM</span> <span className="text-amber-300">customers</span> c, <span className="text-amber-300">orders</span> o</div>
        <div><span className="text-fuchsia-400">WHERE</span> c.region = <span className="text-emerald-300">&apos;EMEA&apos;</span>;</div>
        <div className="mt-3 text-emerald-400">-- Rewritten · 1.4s · ↓ 56%</div>
        <div>
          <span className="text-fuchsia-400">SELECT</span> c.*
        </div>
        <div><span className="text-fuchsia-400">FROM</span> <span className="text-amber-300">customers</span> c</div>
        <div>
          <span className="text-fuchsia-400">WHERE</span> <span className="text-fuchsia-400">EXISTS</span> (
          <span className="text-fuchsia-400">SELECT</span> 1 <span className="text-fuchsia-400">FROM</span> <span className="text-amber-300">orders</span> o ...);
        </div>
      </div>
      <div className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-[10px] font-semibold">
        <FiZap size={10} /> +56% faster
      </div>
    </div>
  );
}

function MockCUM() {
  return (
    <div className="relative w-full h-full bg-[#0a0e1a] flex flex-col">
      <WindowChrome tabLabel="customization.pkb · diff" />
      <div className="grid grid-cols-2 flex-1 text-[9px] sm:text-[10px] font-mono leading-relaxed">
        <div className="p-3 border-r border-white/10 bg-rose-500/[0.05]">
          <div className="text-rose-400 mb-1">- raw</div>
          <div className="text-gray-300">PROCEDURE post_txn IS</div>
          <div className="text-gray-300">BEGIN</div>
          <div className="text-rose-300 bg-rose-500/10 px-1">  l_amt := amt;</div>
          <div className="text-gray-300">  log_audit(...);</div>
          <div className="text-gray-300">END;</div>
        </div>
        <div className="p-3 bg-emerald-500/[0.05]">
          <div className="text-emerald-400 mb-1">+ final</div>
          <div className="text-gray-300">PROCEDURE post_txn IS</div>
          <div className="text-gray-300">BEGIN</div>
          <div className="text-emerald-300 bg-emerald-500/10 px-1">  l_amt := round(amt,2);</div>
          <div className="text-gray-300">  log_audit(...);</div>
          <div className="text-gray-300">END;</div>
        </div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-violet-500/20 border border-violet-400/40 text-violet-200 text-[10px] font-semibold">
        Resolve · merge selected
      </div>
    </div>
  );
}

function MockFBR() {
  return (
    <div className="relative w-full h-full bg-white text-gray-800 flex flex-col">
      <WindowChrome tabLabel="invoice — INV-2025-0481" />
      <div className="flex-1 p-4 font-mono text-[10px] sm:text-xs">
        <div className="flex items-baseline justify-between">
          <div className="font-bold text-gray-900 text-sm">INV-2025-0481</div>
          <div className="text-gray-400">2026-05-10</div>
        </div>
        <div className="mt-2 text-gray-500 text-[10px]">FBR e-Invoicing API · v1</div>
        <div className="mt-3 grid grid-cols-3 gap-1 text-[10px]">
          <div className="text-gray-500">Subtotal</div><div className="col-span-2 text-right text-gray-800">PKR 124,000</div>
          <div className="text-gray-500">Sales Tax (18%)</div><div className="col-span-2 text-right text-gray-800">PKR 22,320</div>
          <div className="font-bold text-gray-900">Total</div><div className="col-span-2 text-right font-bold text-gray-900">PKR 146,320</div>
        </div>
        <div className="mt-3 h-px bg-gray-200" />
        <div className="mt-2 text-[9px] text-gray-400">FBR-INV-9F2A...3D81 · validated</div>
      </div>
      <div className="absolute right-3 top-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 text-[10px] font-semibold">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Submitted
      </div>
    </div>
  );
}

function MockOBE() {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 flex flex-col">
      <WindowChrome tabLabel="obe.app — week 3" />
      <div className="flex-1 p-4 font-mono text-[10px] sm:text-xs">
        <div className="text-blue-300">CS-471 · Week 3 — Inheritance</div>
        <div className="mt-3 space-y-1.5">
          {[
            { lo: "LO-2", text: "Apply OOP composition" },
            { lo: "LO-3", text: "Map super/sub class hierarchy" },
            { lo: "LO-4", text: "Critique multi-inheritance trade-offs" },
          ].map((r) => (
            <div key={r.lo} className="flex items-center gap-2">
              <span className="px-1.5 py-0.5 rounded text-[9px] bg-blue-500/20 border border-blue-400/30 text-blue-200">{r.lo}</span>
              <span className="text-gray-300">{r.text}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 text-[9px] text-blue-400">PEO ↔ PLO mapping locked · accreditation-ready</div>
      </div>
      <div className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-200 text-[10px] font-semibold">
        <FaDatabase size={10} /> AI-generated
      </div>
    </div>
  );
}

function MockChat() {
  return (
    <div className="relative w-full h-full bg-[#0a1929] flex flex-col">
      <WindowChrome tabLabel="cs-471 · class chat" />
      <div className="flex-1 p-4 space-y-2.5 font-mono text-[10px] sm:text-xs">
        <div className="flex justify-start">
          <div className="max-w-[80%] px-3 py-2 rounded-2xl rounded-bl-sm bg-white/10 text-gray-200">
            Quiz #2 today @ 4pm — same room?
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-[80%] px-3 py-2 rounded-2xl rounded-br-sm bg-cyan-500/30 text-cyan-50">
            Yes — solutions sheet posted on the portal
          </div>
        </div>
        <div className="flex justify-start">
          <div className="max-w-[80%] px-3 py-2 rounded-2xl rounded-bl-sm bg-white/10 text-gray-200 flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-gray-400 animate-pulse" />
            <span className="w-1 h-1 rounded-full bg-gray-400 animate-pulse" style={{ animationDelay: "0.15s" }} />
            <span className="w-1 h-1 rounded-full bg-gray-400 animate-pulse" style={{ animationDelay: "0.3s" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

const MOCKS = {
  querymind: <MockQueryMind />,
  cum: <MockCUM />,
  fbr: <MockFBR />,
  obe: <MockOBE />,
  chat: <MockChat />,
};

/* ---------------- Card component ---------------- */

function ProjectCard({ p, darkMode, large = false }) {
  const cardCls = darkMode ? "bg-gray-900" : "bg-white";

  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.005 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={`group relative h-full rounded-2xl gradient-border overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 ${cardCls}`}
    >
      {/* Accent glow on hover */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
        style={{ boxShadow: `0 30px 80px -20px ${p.glow}` }}
      />

      {/* Image / Mock */}
      <div className={`relative overflow-hidden ${large ? "aspect-[16/10] lg:aspect-[16/9]" : "aspect-[16/9]"}`}>
        {p.mock ? (
          <div className="absolute inset-0">{MOCKS[p.mock]}</div>
        ) : (
          <>
            <Image
              src={p.image}
              alt={p.name}
              fill
              sizes={large ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div
              className={`absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t ${
                darkMode ? "from-gray-900/80" : "from-white/40"
              } to-transparent pointer-events-none`}
            />
          </>
        )}

        {/* Top-left icon badge */}
        <div className={`absolute top-4 left-4 z-10 flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${p.accent} text-white shadow-lg`}>
          {p.icon}
        </div>

        {/* Top-right year chip */}
        <div className="absolute top-4 right-4 z-10 inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/10">
          {p.year}
        </div>

        {/* Featured pill */}
        {p.featured && (
          <div className="absolute bottom-4 left-4 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/95 text-gray-900 shadow-xl">
            <FiStar className="text-amber-500" size={12} />
            Featured
          </div>
        )}
      </div>

      {/* Body */}
      <div className={`p-6 ${large ? "lg:p-8" : ""}`}>
        <h3 className={`font-bold tracking-tight ${large ? "text-2xl lg:text-3xl" : "text-xl"}`}>
          {p.name}
        </h3>
        <p className={`mt-2 leading-relaxed ${large ? "text-base" : "text-sm"} ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
          {p.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.tags.map((t) => (
            <span
              key={t}
              className={`px-2 py-0.5 text-[11px] font-medium font-mono rounded-md ${
                darkMode ? "bg-white/5 text-gray-300 border border-white/10" : "bg-gray-100 text-gray-700 border border-gray-200"
              }`}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3">
          <Link
            href={p.link}
            className="group/btn inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-brand-gradient hover:opacity-90 shadow-glow transition-opacity"
          >
            Case Study
            <FiArrowUpRight className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Link>
          {p.repo && (
            <a
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border transition-colors ${
                darkMode ? "border-white/15 text-white hover:bg-white/5" : "border-gray-300 text-gray-900 hover:bg-gray-50"
              }`}
            >
              <FiGithub /> Source
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

/* ---------------- Page ---------------- */

export default function Projects() {
  const { darkMode } = useDarkMode();
  const [filter, setFilter] = useState("All");

  const featured = useMemo(() => PROJECTS.filter((p) => p.year === "2025"), []);
  const earlier = useMemo(() => PROJECTS.filter((p) => p.year !== "2025"), []);

  const visibleFeatured = useMemo(
    () => (filter === "All" ? featured : featured.filter((p) => p.categories.includes(filter))),
    [filter, featured]
  );
  const visibleEarlier = useMemo(
    () => (filter === "All" ? earlier : earlier.filter((p) => p.categories.includes(filter))),
    [filter, earlier]
  );

  const totalVisible = visibleFeatured.length + visibleEarlier.length;
  const categoriesCount = new Set(PROJECTS.flatMap((p) => p.categories)).size;

  return (
    <div className={darkMode ? "bg-gray-950 text-gray-200" : "bg-white text-gray-800"}>
      <MetaHead title="Projects — Waseem Shahzad" description="Selected projects: AI tooling, banking automation, full-stack apps, and engineering experiments." />
      <Navbar />

      <main className="relative">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className={`absolute inset-0 -z-10 ${darkMode ? "bg-grid-dark" : "bg-grid-light"}`} />
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] -z-10 blur-3xl rounded-full ${darkMode ? "bg-blue-700/30" : "bg-blue-300/40"}`} />
          <div className={`absolute top-32 right-0 w-[500px] h-[300px] -z-10 blur-3xl rounded-full ${darkMode ? "bg-violet-700/20" : "bg-violet-300/30"}`} />

          <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-10 text-center">
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
              AI tooling, FLEXCUBE deployment automation, full-stack platforms, and academic projects — each one shipped end-to-end.
            </motion.p>

            {/* Counter + filter row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4"
            >
              <p className={`text-xs font-mono uppercase tracking-widest ${darkMode ? "text-gray-500" : "text-gray-500"}`}>
                {totalVisible} project{totalVisible !== 1 ? "s" : ""} · {categoriesCount} categories
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {FILTERS.map((f) => {
                  const active = filter === f;
                  return (
                    <button
                      key={f}
                      onClick={() => setFilter(f)}
                      className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                        active
                          ? "text-white bg-brand-gradient shadow-glow"
                          : darkMode
                          ? "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"
                          : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                      }`}
                    >
                      {f}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* FEATURED 2025 */}
        {visibleFeatured.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-4 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 flex items-center gap-3"
            >
              <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider bg-brand-gradient text-white shadow-glow">
                FEATURED · 2025
              </span>
              <span className={`h-px flex-1 ${darkMode ? "bg-white/10" : "bg-gray-200"}`} />
            </motion.div>

            <AnimatePresence mode="popLayout">
              <motion.div
                key={filter + "-featured"}
                layout
                className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6"
              >
                {visibleFeatured.map((p, i) => (
                  <motion.div
                    key={p.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    className={p.featured ? "lg:col-span-2 lg:row-span-2" : "lg:col-span-1"}
                  >
                    <ProjectCard p={p} darkMode={darkMode} large={!!p.featured} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </section>
        )}

        {/* EARLIER WORK */}
        {visibleEarlier.length > 0 && (
          <section className={`relative ${darkMode ? "bg-gray-900/30" : "bg-gray-50"} border-y ${darkMode ? "border-white/5" : "border-gray-200"}`}>
            <div className={`absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] -z-0 blur-3xl rounded-full opacity-50 ${darkMode ? "bg-violet-900/30" : "bg-violet-200/40"}`} />
            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-10 flex items-center gap-3"
              >
                <span className={`text-xs uppercase tracking-widest font-semibold ${darkMode ? "text-violet-400" : "text-violet-600"}`}>
                  Earlier work · 2020–2024
                </span>
                <span className={`h-px flex-1 ${darkMode ? "bg-white/10" : "bg-gray-200"}`} />
              </motion.div>

              <AnimatePresence mode="popLayout">
                <motion.div
                  key={filter + "-earlier"}
                  layout
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
                >
                  {visibleEarlier.map((p, i) => (
                    <motion.div
                      key={p.id}
                      layout
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
                    >
                      <ProjectCard p={p} darkMode={darkMode} />
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </section>
        )}

        {/* EMPTY STATE */}
        {totalVisible === 0 && (
          <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24 text-center">
            <p className={`text-lg ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              No projects match <span className="font-mono gradient-text">{filter}</span> yet.
            </p>
            <button
              onClick={() => setFilter("All")}
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-brand-gradient shadow-glow"
            >
              Show all projects
            </button>
          </section>
        )}

        {/* CTA FOOTER */}
        <section className={darkMode ? "bg-gray-950" : "bg-white"}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-3xl bg-brand-gradient p-10 lg:p-14 text-white shadow-glow-lg"
            >
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-16 -left-12 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div>
                  <p className="text-xs uppercase tracking-widest font-semibold text-white/70">
                    Like what you see?
                  </p>
                  <h2 className="mt-2 text-3xl lg:text-4xl font-extrabold tracking-tight max-w-2xl">
                    Let's build something together.
                  </h2>
                  <p className="mt-3 text-white/85 max-w-xl">
                    Open to remote consulting and contract work — banking customizations, internal tooling, AI-augmented database products.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="group inline-flex shrink-0 items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold bg-white text-gray-900 hover:bg-gray-100 transition-colors"
                >
                  Start a conversation
                  <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}