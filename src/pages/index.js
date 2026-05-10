import { useDarkMode } from "../context/DarkModeContext";
import MetaHead from "../components/MetaHead";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaCode,
  FaCogs,
  FaBug,
  FaPlug,
  FaNetworkWired,
  FaUsers,
  FaGithub,
  FaLinkedin,
  FaPython,
  FaReact,
  FaDocker,
  FaDatabase,
  FaArrowRight,
} from "react-icons/fa";
import { SiDjango, SiOracle, SiFlutter, SiNextdotjs, SiTypescript, SiNodedotjs, SiAnthropic, SiGoogle } from "react-icons/si";
import { FiMail, FiArrowRight } from "react-icons/fi";

const TECH = [
  { icon: <SiOracle />, name: "FLEXCUBE" },
  { icon: <FaDatabase />, name: "PL/SQL" },
  { icon: <FaPython />, name: "Python" },
  { icon: <SiDjango />, name: "Django" },
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <FaReact />, name: "React" },
  { icon: <SiFlutter />, name: "Flutter" },
  { icon: <SiAnthropic />, name: "Claude API" },
  { icon: <SiGoogle />, name: "Gemini API" },
  { icon: <FaDocker />, name: "Docker" },
];

const STATS = [
  { value: "50+", label: "FLEXCUBE Customizations" },
  { value: "122", label: "Branches Migrated" },
  { value: "Tier-1", label: "Banks Supported" },
  { value: "5", label: "Engineers Mentored" },
];

const EXPERTISE = [
  {
    title: "Oracle FLEXCUBE",
    icon: <FaCogs />,
    description:
      "End-to-end customization and production support across CASA, Lending, ELCM, and PDM for tier-1 banking clients.",
  },
  {
    title: "PL/SQL & SQL Tuning",
    icon: <FaCode />,
    description:
      "Performance work on EOD batches and month-end issues using EXPLAIN PLAN, indexing strategy, and bulk binds.",
  },
  {
    title: "Islamic Banking Conversion",
    icon: <FaNetworkWired />,
    description:
      "On-site lead for Pakistan's first conventional-to-Islamic conversion on FLEXCUBE — 122 branches migrated.",
  },
  {
    title: "AI / LLM Integration",
    icon: <FaPlug />,
    description:
      "Schema-grounded LLM workflows with Google Gemini and Anthropic Claude APIs for SQL and database tooling.",
  },
  {
    title: "Full-stack Engineering",
    icon: <FaBug />,
    description:
      "Production-grade products with Python/Django, Node.js, Next.js, React, TypeScript, and Electron.",
  },
  {
    title: "Mentorship & Delivery",
    icon: <FaUsers />,
    description:
      "Mentoring junior engineers, coordinating Agile releases, and acting as liaison between clients and offshore teams.",
  },
];

export default function Home() {
  const { darkMode } = useDarkMode();

  return (
    <div className={darkMode ? "bg-gray-950 text-gray-200" : "bg-white text-gray-800"}>
      <MetaHead />
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute inset-0 -z-10">
          <div className={`blob top-10 -left-20 w-[480px] h-[480px] ${darkMode ? "bg-blue-700" : "bg-blue-400"}`} />
          <div className={`blob top-32 right-0 w-[420px] h-[420px] ${darkMode ? "bg-violet-700" : "bg-violet-400"}`} style={{ animationDelay: "4s" }} />
          <div className={`blob bottom-0 left-1/3 w-[380px] h-[380px] ${darkMode ? "bg-indigo-700" : "bg-indigo-400"}`} style={{ animationDelay: "8s" }} />
        </div>
        <div className={`absolute inset-0 -z-10 ${darkMode ? "bg-grid-dark" : "bg-grid-light"}`} />
        <div
          className={`absolute inset-0 -z-10 ${
            darkMode
              ? "bg-gradient-to-b from-gray-950/40 via-gray-950/70 to-gray-950"
              : "bg-gradient-to-b from-white/40 via-white/70 to-white"
          }`}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-24 lg:pt-24 lg:pb-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border ${
                  darkMode
                    ? "bg-white/5 border-white/10 text-gray-300"
                    : "bg-white border-gray-200 text-gray-700 shadow-sm"
                }`}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping-slow" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Open to remote consulting · European banks & fintechs
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.05]"
              >
                Hi, I'm <span className="gradient-text">Waseem Shahzad</span>
                <span className="block mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold opacity-80">
                  Oracle FLEXCUBE Technical Consultant
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className={`mt-6 max-w-xl text-base sm:text-lg leading-relaxed ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Delivering Oracle FLEXCUBE solutions to tier-1 banks — CASA, Lending, ELCM, and PDM. Strong PL/SQL and SQL-tuning expertise complemented by full-stack engineering in Python/Django, Node.js, Next.js, and React.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-brand-gradient shadow-glow hover:shadow-glow-lg transition-shadow"
                >
                  View My Work
                  <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border transition-colors ${
                    darkMode
                      ? "border-white/15 text-white hover:bg-white/5"
                      : "border-gray-300 text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <FiMail /> Get in Touch
                </Link>
              </motion.div>

              {/* Social row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 flex items-center gap-4"
              >
                <span className={`text-xs uppercase tracking-widest ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                  Follow
                </span>
                <span className={`h-px w-8 ${darkMode ? "bg-white/10" : "bg-gray-300"}`} />
                <a href="https://github.com/Waseem-786" target="_blank" rel="noreferrer" aria-label="GitHub" className={`p-2 rounded-full transition-colors ${darkMode ? "hover:bg-white/10" : "hover:bg-gray-100"}`}>
                  <FaGithub size={18} />
                </a>
                <a href="https://www.linkedin.com/in/WaseemShahzad" target="_blank" rel="noreferrer" aria-label="LinkedIn" className={`p-2 rounded-full transition-colors ${darkMode ? "hover:bg-white/10" : "hover:bg-gray-100"}`}>
                  <FaLinkedin size={18} />
                </a>
                <a href="mailto:engrwaseemshahzad134@gmail.com" aria-label="Email" className={`p-2 rounded-full transition-colors ${darkMode ? "hover:bg-white/10" : "hover:bg-gray-100"}`}>
                  <FiMail size={18} />
                </a>
              </motion.div>
            </div>

            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="absolute -inset-2 rounded-full bg-brand-gradient blur-2xl opacity-50 animate-float" />
                <div className={`relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[22rem] lg:h-[22rem] rounded-full p-1.5 bg-brand-gradient shadow-glow-lg`}>
                  <div className={`w-full h-full rounded-full overflow-hidden ${darkMode ? "bg-gray-900" : "bg-white"}`}>
                    <Image
                      src="/Waseem_Shahzad-removebg.png"
                      alt="Waseem Shahzad"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
                {/* Floating tech badges */}
                <div className={`absolute -left-4 top-12 px-3 py-1.5 rounded-full text-xs font-mono shadow-lg backdrop-blur-md flex items-center gap-2 ${darkMode ? "bg-white/10 text-white border border-white/10" : "bg-white text-gray-900 border border-gray-200"}`}>
                  <SiDjango className="text-emerald-500" /> Django
                </div>
                <div className={`absolute -right-2 top-32 px-3 py-1.5 rounded-full text-xs font-mono shadow-lg backdrop-blur-md flex items-center gap-2 ${darkMode ? "bg-white/10 text-white border border-white/10" : "bg-white text-gray-900 border border-gray-200"}`}>
                  <SiOracle className="text-red-500" /> Flexcube
                </div>
                <div className={`absolute -left-2 bottom-16 px-3 py-1.5 rounded-full text-xs font-mono shadow-lg backdrop-blur-md flex items-center gap-2 ${darkMode ? "bg-white/10 text-white border border-white/10" : "bg-white text-gray-900 border border-gray-200"}`}>
                  <FaPython className="text-blue-500" /> Python
                </div>
              </div>
            </motion.div>
          </div>

          {/* Tech strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className={`mt-16 pt-8 border-t ${darkMode ? "border-white/5" : "border-gray-200"}`}
          >
            <p className={`text-xs uppercase tracking-widest text-center mb-6 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
              Tools & Technologies
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-2xl">
              {TECH.map((t) => (
                <div
                  key={t.name}
                  title={t.name}
                  className={`flex items-center gap-2 transition-opacity ${
                    darkMode ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {t.icon}
                  <span className="text-sm font-medium hidden sm:inline">{t.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className={`relative ${darkMode ? "bg-gray-950 border-y border-white/5" : "bg-gray-50 border-y border-gray-200"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-extrabold gradient-text">{s.value}</div>
                <div className={`mt-2 text-xs uppercase tracking-widest ${darkMode ? "text-gray-500" : "text-gray-500"}`}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className={`${darkMode ? "bg-gray-950" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <p className={`text-sm uppercase tracking-widest font-semibold ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
                About me
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Core banking, <span className="gradient-text">production-grade</span> engineering.
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-7"
            >
              <p className={`text-base lg:text-lg leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                Technical Application Consultant at <span className={darkMode ? "text-white" : "text-gray-900"}>Techlogix</span>, delivering Core Banking solutions on <span className={darkMode ? "text-white" : "text-gray-900"}>Oracle FLEXCUBE</span> — including key technical contributions to <span className={darkMode ? "text-white" : "text-gray-900"}>Pakistan's first conventional-to-Islamic banking conversion</span>, with 122 branches migrated on-site and migration scripts the client now uses to roll out remaining branches independently.
              </p>
              <p className={`mt-4 text-base lg:text-lg leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                Beyond banking, I build in-house automation and full-stack products — most recently shipping an Electron tool that cut deployment review effort by ~30 minutes per change, and an AI-powered Oracle SQL optimizer using Gemini and Claude APIs.
              </p>
              <Link
                href="/about"
                className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold ${
                  darkMode ? "text-white hover:text-blue-400" : "text-gray-900 hover:text-blue-600"
                }`}
              >
                More about me <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className={`${darkMode ? "bg-gray-900/50" : "bg-gray-50"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center mb-14">
            <p className={`text-sm uppercase tracking-widest font-semibold ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
              What I do
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              My <span className="gradient-text">Expertise</span>
            </h2>
            <p className={`mt-4 max-w-2xl mx-auto ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              A snapshot of the work I love and the tools I use to ship dependable software.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXPERTISE.map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                className={`group relative p-6 rounded-2xl gradient-border overflow-hidden transition-all hover:-translate-y-1 ${
                  darkMode ? "bg-gray-900 hover:bg-gray-800/80" : "bg-white hover:shadow-xl"
                }`}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-gradient text-white text-xl mb-5 shadow-glow">
                  {e.icon}
                </div>
                <h3 className="text-lg font-bold">{e.title}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                  {e.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${darkMode ? "bg-gray-950" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-brand-gradient p-10 lg:p-16 text-white shadow-glow-lg"
          >
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-16 -left-12 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight max-w-2xl">
                  Have a project in mind? Let's build it together.
                </h2>
                <p className="mt-3 text-white/85 max-w-xl">
                  Whether it's an API, a banking customization, or a full product — I'm a message away.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold bg-white text-gray-900 hover:bg-gray-100 transition-colors"
              >
                Start a conversation <FiArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
