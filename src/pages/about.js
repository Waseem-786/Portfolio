import { useDarkMode } from "../context/DarkModeContext";
import Navbar from "../components/Navbar";
import MetaHead from "../components/MetaHead";
import Footer from "../components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiGlobe,
  FiBriefcase,
  FiArrowUpRight,
  FiAward,
  FiBookOpen,
} from "react-icons/fi";
import {
  FaUsers,
  FaCogs,
  FaServer,
  FaTools,
  FaRobot,
  FaLanguage,
} from "react-icons/fa";

const CONTACT = [
  { icon: <FiMail />, text: "engrwaseemshahzad134@gmail.com", link: "mailto:engrwaseemshahzad134@gmail.com" },
  { icon: <FiPhone />, text: "+92 341 9648099", link: "tel:+923419648099" },
  { icon: <FiGithub />, text: "github.com/Waseem-786", link: "https://github.com/Waseem-786" },
  { icon: <FiLinkedin />, text: "linkedin.com/in/WaseemShahzad", link: "https://www.linkedin.com/in/WaseemShahzad" },
  { icon: <FiBriefcase />, text: "Freelancer @ Studypool", link: "https://www.studypool.com/MalikNajaf?aid=najafsays123" },
  { icon: <FiGlobe />, text: "usavisahelp.net", link: "https://usavisahelp.net" },
  { icon: <FiMapPin />, text: "Islamabad, Pakistan" },
];

const SKILLS = [
  {
    title: "Core Banking & Oracle",
    icon: <FaCogs />,
    skills: [
      "Oracle FLEXCUBE",
      "CASA · Lending · ELCM · PDM",
      "Oracle Database 19c / 12c",
      "PL/SQL",
      "SQL Tuning & Optimization",
      "EXPLAIN PLAN / DBMS_XPLAN",
      "Islamic Banking",
      "End-of-Day (EOD) processes",
      "Oracle RAD Tool",
      "Oracle APEX",
    ],
  },
  {
    title: "Software Engineering",
    icon: <FaServer />,
    skills: [
      "Python",
      "Django",
      "Django REST",
      "Node.js",
      "TypeScript",
      "Next.js",
      "React",
      "Flutter",
      "Electron",
      "REST APIs",
      "MongoDB",
      "Git",
      "Docker",
    ],
  },
  {
    title: "AI / LLM Integration",
    icon: <FaRobot />,
    skills: [
      "Google Gemini API",
      "Anthropic Claude API",
      "Prompt engineering",
      "Structured outputs",
      "Schema-grounded LLM workflows",
    ],
  },
  {
    title: "Practices",
    icon: <FaUsers />,
    skills: [
      "Agile delivery",
      "Code review",
      "Mentoring",
      "Client communication",
      "Technical documentation",
      "Production support",
      "On-site implementation",
    ],
  },
  {
    title: "Languages",
    icon: <FaLanguage />,
    skills: ["English — IELTS 7.0", "Urdu — Native"],
  },
  {
    title: "Tools",
    icon: <FaTools />,
    skills: ["Monaco Editor", "Electron Builder", "Tailwind CSS", "Firebase", "Linux"],
  },
];

const EDUCATION = [
  {
    degree: "Bachelor's in Software Engineering",
    institution: "National University of Sciences and Technology (NUST)",
    detail: "CGPA 3.62 / 4.00 · Final Year Project: Digital OBE System",
    period: "2020 — 2024",
  },
  {
    degree: "Intermediate (Pre-Engineering)",
    institution: "KIPS College, Faisalabad",
    detail: "",
    period: "2018 — 2020",
  },
  {
    degree: "Matriculation (Science)",
    institution: "Hassan Bin Sabet High School",
    detail: "",
    period: "2016 — 2018",
  },
];

const CERTIFICATIONS = [
  {
    title: "The Complete PL/SQL Bootcamp: Beginner to Advanced",
    issuer: "Udemy · Database Masters Training / Code Star Academy",
    detail: "26.5 hours",
    period: "May 2025",
  },
];

const EXPERIENCE = [
  {
    company: "Techlogix",
    role: "Technical Application Consultant",
    period: "Jul 2024 — Present",
    location: "Islamabad, Pakistan",
    bullets: [
      "Deliver Oracle FLEXCUBE production and staging support across CASA, Lending, ELCM, and PDM modules for tier-1 banking clients — owning issue analysis, PL/SQL fixes, and post-deployment validation.",
      "On-site technical lead for Pakistan's first conventional-to-Islamic banking conversion using Oracle FLEXCUBE; personally migrated 122 branches and authored migration scripts the client now uses to roll out remaining branches independently.",
      "Delivered 50+ FLEXCUBE customizations end-to-end — requirement analysis, PL/SQL implementation, UAT, production deployment, and warranty support.",
      "Own configuration and ongoing production support for the PDM (Profit Distribution Module) for Islamic banking operations, including profit calculation rules and EOD reconciliation.",
      "Optimized recurring End-of-Day batches and resolved month-end issues using PL/SQL tuning techniques (EXPLAIN PLAN, indexing strategy, bulk binds).",
      "Mentored 5 junior engineers on FLEXCUBE customization workflows, PL/SQL best practices, and on-site delivery; serve as liaison between client stakeholders, offshore developers, and QA.",
    ],
  },
  {
    company: "eARMS GHQ — C4I Directorate",
    role: "Oracle APEX Developer Intern",
    period: "Jul 2023 — Sep 2023",
    location: "Islamabad, Pakistan",
    bullets: [
      "Built a ChatBot in Oracle APEX integrated with a machine-learning model trained on Excel data, enabling natural-language queries against operational records.",
      "Developed an Attendance Management System to automate record handling and reporting, replacing manual tracking workflows.",
      "Strengthened SQL, PL/SQL, and APEX skills through hands-on production-style project work in a defence-grade environment.",
    ],
  },
];

export default function About() {
  const { darkMode } = useDarkMode();

  return (
    <div className={darkMode ? "bg-gray-950 text-gray-200" : "bg-white text-gray-800"}>
      <MetaHead title="About — Waseem Shahzad" description="About Waseem Shahzad — Oracle FLEXCUBE Technical Consultant and full-stack engineer." />
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 -z-10 ${darkMode ? "bg-grid-dark" : "bg-grid-light"}`} />
        <div className={`absolute top-0 right-0 w-[500px] h-[300px] -z-10 blur-3xl rounded-full ${darkMode ? "bg-violet-700/30" : "bg-violet-300/40"}`} />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-8"
            >
              <p className={`text-sm uppercase tracking-widest font-semibold ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
                About me
              </p>
              <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                <span className="gradient-text">Waseem Shahzad</span>
              </h1>
              <p className={`mt-3 text-xl lg:text-2xl font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                Oracle FLEXCUBE Technical Consultant
              </p>
              <p className={`mt-5 max-w-2xl text-base lg:text-lg leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                Oracle FLEXCUBE Technical Consultant at Techlogix, delivering Core Banking solutions to tier-1 banks across CASA, Lending, ELCM, and PDM modules — including key technical contributions to Pakistan's first conventional-to-Islamic banking conversion (122 branches migrated on-site).
              </p>
              <p className={`mt-3 max-w-2xl text-base lg:text-lg leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                Strong PL/SQL and SQL-tuning expertise complemented by full-stack engineering in Python/Django, Node.js, Next.js, and React. Built in-house automation tools that cut deployment review effort by ~30 minutes per change. Open to remote consulting and contract opportunities with European banks and fintechs.
              </p>

              <a
                href="/Waseem_Shahzad_CV.pdf"
                download
                className="mt-7 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-brand-gradient hover:opacity-90 shadow-glow transition-opacity"
              >
                Download Resume <FiArrowUpRight />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-4 flex justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-2 rounded-2xl bg-brand-gradient blur-2xl opacity-40" />
                <div className="relative w-56 h-72 rounded-2xl overflow-hidden p-1 bg-brand-gradient shadow-glow-lg">
                  <div className={`w-full h-full rounded-xl overflow-hidden ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}>
                    <Image
                      src="/Waseem_Shahzad-removebg.png"
                      alt="Waseem Shahzad"
                      width={300}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 p-3 rounded-2xl gradient-border ${
              darkMode ? "bg-gray-900/60" : "bg-white"
            }`}
          >
            {CONTACT.map((c) => {
              const inner = (
                <>
                  <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-brand-gradient text-white text-base shrink-0">
                    {c.icon}
                  </span>
                  <span className="text-sm font-medium truncate">{c.text}</span>
                </>
              );
              const baseCls = `flex items-center gap-3 p-3 rounded-xl transition-colors ${
                darkMode ? "hover:bg-white/5" : "hover:bg-gray-50"
              }`;
              return c.link ? (
                <a key={c.text} href={c.link} target="_blank" rel="noreferrer" className={baseCls}>
                  {inner}
                </a>
              ) : (
                <div key={c.text} className={baseCls}>
                  {inner}
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* SKILLS */}
      <section className={`${darkMode ? "bg-gray-950" : "bg-gray-50"} border-y ${darkMode ? "border-white/5" : "border-gray-200"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="text-center mb-14">
            <p className={`text-sm uppercase tracking-widest font-semibold ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
              Toolkit
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.07 }}
                className={`p-6 rounded-2xl gradient-border transition-all hover:-translate-y-1 ${
                  darkMode ? "bg-gray-900" : "bg-white"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-gradient text-white text-lg shadow-glow">
                    {cat.icon}
                  </span>
                  <h3 className="text-lg font-bold">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className={`px-2.5 py-1 text-xs font-medium font-mono rounded-md ${
                        darkMode ? "bg-white/5 text-gray-300 border border-white/10" : "bg-gray-100 text-gray-700 border border-gray-200"
                      }`}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className={darkMode ? "bg-gray-950" : "bg-white"}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-20">
          <div className="mb-12">
            <p className={`text-sm uppercase tracking-widest font-semibold ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
              Career
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Professional <span className="gradient-text">Experience</span>
            </h2>
          </div>

          <div className="relative pl-6 sm:pl-10">
            <div className={`absolute left-2 sm:left-3 top-0 bottom-0 w-px ${darkMode ? "bg-white/10" : "bg-gray-200"}`} />
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="relative mb-10 last:mb-0"
              >
                <span className="absolute -left-[25px] sm:-left-[33px] top-1.5 flex items-center justify-center w-5 h-5 rounded-full bg-brand-gradient ring-4 ring-white dark:ring-gray-950 shadow-glow">
                  <FiBriefcase className="text-white text-[10px]" />
                </span>
                <div className={`p-6 rounded-2xl gradient-border ${darkMode ? "bg-gray-900" : "bg-white"}`}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-bold">{exp.role}</h3>
                    <span className={`text-xs font-mono ${darkMode ? "text-gray-500" : "text-gray-500"}`}>{exp.period}</span>
                  </div>
                  <p className={`text-sm font-semibold ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
                    {exp.company}
                    {exp.location && <span className={`ml-2 font-normal ${darkMode ? "text-gray-500" : "text-gray-500"}`}>· {exp.location}</span>}
                  </p>
                  <ul className={`mt-4 space-y-2.5 text-sm leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                    {exp.bullets.map((b, k) => (
                      <li key={k} className="flex items-start gap-2.5">
                        <span className={`mt-1.5 shrink-0 h-1.5 w-1.5 rounded-full ${darkMode ? "bg-blue-400" : "bg-blue-600"}`} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION & CERTIFICATIONS */}
      <section className={`${darkMode ? "bg-gray-950 border-t border-white/5" : "bg-gray-50 border-t border-gray-200"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="mb-12">
            <p className={`text-sm uppercase tracking-widest font-semibold ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
              Education
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Academic <span className="gradient-text">Background</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EDUCATION.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className={`p-6 rounded-2xl gradient-border ${darkMode ? "bg-gray-900" : "bg-white"}`}
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-brand-gradient text-white text-lg shadow-glow mb-4">
                  {i === 0 ? <FiAward /> : <FiBookOpen />}
                </div>
                <p className={`text-xs font-mono ${darkMode ? "text-gray-500" : "text-gray-500"}`}>{edu.period}</p>
                <h3 className="mt-2 text-lg font-bold leading-tight">{edu.degree}</h3>
                <p className={`mt-1 text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>{edu.institution}</p>
                {edu.detail && <p className={`mt-2 text-sm font-semibold ${darkMode ? "text-blue-400" : "text-blue-600"}`}>{edu.detail}</p>}
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          {CERTIFICATIONS.length > 0 && (
            <div className="mt-14">
              <p className={`text-sm uppercase tracking-widest font-semibold ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
                Continuous learning
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight mb-6">
                <span className="gradient-text">Certifications</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {CERTIFICATIONS.map((c, i) => (
                  <motion.div
                    key={c.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
                    className={`p-6 rounded-2xl gradient-border ${darkMode ? "bg-gray-900" : "bg-white"}`}
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-brand-gradient text-white text-lg shadow-glow shrink-0">
                        <FiAward />
                      </span>
                      <div className="min-w-0">
                        <p className={`text-xs font-mono ${darkMode ? "text-gray-500" : "text-gray-500"}`}>
                          {c.period} {c.detail && `· ${c.detail}`}
                        </p>
                        <h3 className="mt-1 text-base font-bold leading-snug">{c.title}</h3>
                        <p className={`mt-1 text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>{c.issuer}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}