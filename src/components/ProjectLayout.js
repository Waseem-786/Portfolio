import { useDarkMode } from "../context/DarkModeContext";
import MetaHead from "./MetaHead";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiArrowLeft, FiArrowUpRight, FiGithub, FiPlayCircle, FiCheckCircle } from "react-icons/fi";

function SectionHeader({ kicker, title, darkMode }) {
  return (
    <div className="mb-10">
      {kicker && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className={`text-xs uppercase tracking-widest font-semibold ${darkMode ? "text-blue-400" : "text-blue-600"}`}
        >
          {kicker}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight"
      >
        {title}
      </motion.h2>
    </div>
  );
}

function WindowChrome() {
  return (
    <div className="window-chrome">
      <span className="window-dot bg-red-400" />
      <span className="window-dot bg-yellow-400" />
      <span className="window-dot bg-emerald-400" />
    </div>
  );
}

/**
 * Framed screenshot — macOS-style device chrome around a UI screenshot.
 * Uses object-contain so screenshots aren't cropped, with hover lift + glow.
 */
function FramedScreenshot({ src, alt, darkMode, maxHeight = "max-h-[420px]", priority = false, hover = true }) {
  return (
    <motion.div
      whileHover={hover ? { y: -6, scale: 1.012 } : undefined}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={`group relative p-2 rounded-2xl shadow-2xl shadow-glow-image-hover transition-shadow duration-500 ring-1 ${
        darkMode
          ? "bg-gradient-to-br from-gray-800 to-gray-900 ring-white/10 shadow-glow-image"
          : "bg-gradient-to-br from-slate-100 to-slate-200 ring-black/5 shadow-glow-image"
      }`}
    >
      <div className={`relative overflow-hidden rounded-xl ${darkMode ? "bg-gray-950" : "bg-white"}`}>
        <WindowChrome />
        <div className={`relative w-full ${maxHeight} flex items-center justify-center ${darkMode ? "bg-gray-950" : "bg-white"}`}>
          <Image
            src={src}
            alt={alt}
            width={1600}
            height={1000}
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority={priority}
            className={`w-full h-auto ${maxHeight} object-contain transition-transform duration-700 group-hover:scale-[1.015]`}
          />
        </div>
      </div>
    </motion.div>
  );
}

/**
 * Solid placeholder card — for projects without a screenshot.
 */
function PlaceholderHero({ icon, accent, darkMode }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.012 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-glow-image ring-1 ${
        darkMode ? "ring-white/10" : "ring-black/5"
      } bg-gradient-to-br ${accent || "from-blue-500 to-indigo-600"} flex items-center justify-center`}
    >
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/15" />
      <div className="relative text-white text-8xl drop-shadow-2xl">{icon}</div>
    </motion.div>
  );
}

const bulletList = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};
const bulletItem = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35 } },
};

export default function ProjectLayout({
  title,
  tagline,
  description,
  tags = [],
  hero, // { image } | { placeholder: true, icon, accent }
  github,
  demoVideo,
  overview, // { problem, solution: string | { intro?, bullets: [] } }
  stats = [], // [{ value, label, note? }]
  techStack = [], // [{ name, icon }]
  externalLibraries = [], // [{ name, description }]
  features = [], // [{ title, description, bullets?, image?, images? }]
  diagrams, // { title, description, images: [] }
  metaDescription,
}) {
  const { darkMode } = useDarkMode();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroVisualY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const heroVisualOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  const containerCls = darkMode ? "bg-gray-950 text-gray-200" : "bg-white text-gray-800";
  const cardCls = darkMode ? "bg-gray-900" : "bg-white";
  const subtleCls = darkMode ? "bg-gray-900/40" : "bg-gray-50";
  const mutedTextCls = darkMode ? "text-gray-400" : "text-gray-600";

  return (
    <div className={containerCls}>
      <MetaHead title={`${title} — Waseem Shahzad`} description={metaDescription || tagline} />
      <Navbar />

      {/* HERO */}
      <section ref={heroRef} className="relative overflow-hidden">
        <div className={`absolute inset-0 -z-10 ${darkMode ? "bg-grid-dark" : "bg-grid-light"}`} />
        <div className={`absolute top-0 right-0 w-[600px] h-[300px] -z-10 blur-3xl rounded-full ${darkMode ? "bg-blue-700/30" : "bg-blue-300/40"}`} />
        <div className={`absolute top-32 left-0 w-[500px] h-[300px] -z-10 blur-3xl rounded-full ${darkMode ? "bg-violet-700/20" : "bg-violet-300/30"}`} />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-20 lg:pt-16 lg:pb-28">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/projects"
              className={`group inline-flex items-center gap-2 text-sm font-medium ${
                darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
              Back to projects
            </Link>
          </motion.div>

          <div className="mt-8 grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="lg:col-span-7"
            >
              <p className={`text-sm uppercase tracking-widest font-semibold ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
                Case study
              </p>
              <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
                <span className="gradient-text">{title}</span>
              </h1>
              {tagline && (
                <p className={`mt-4 text-lg lg:text-xl font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  {tagline}
                </p>
              )}
              {description && (
                <p className={`mt-4 max-w-2xl text-base leading-relaxed ${mutedTextCls}`}>
                  {description}
                </p>
              )}

              {tags.length > 0 && (
                <motion.div
                  variants={bulletList}
                  initial="hidden"
                  animate="visible"
                  className="mt-6 flex flex-wrap gap-2"
                >
                  {tags.map((t) => (
                    <motion.span
                      key={t}
                      variants={bulletItem}
                      className={`px-2.5 py-1 text-xs font-medium font-mono rounded-md ${
                        darkMode ? "bg-white/5 text-gray-300 border border-white/10" : "bg-gray-100 text-gray-700 border border-gray-200"
                      }`}
                    >
                      {t}
                    </motion.span>
                  ))}
                </motion.div>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                {github && (
                  <motion.a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-brand-gradient shadow-glow hover:shadow-glow-lg transition-shadow"
                  >
                    <FiGithub /> View Source
                  </motion.a>
                )}
                {demoVideo && (
                  <motion.a
                    href="#demo"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border transition-colors ${
                      darkMode
                        ? "border-white/15 text-white hover:bg-white/5"
                        : "border-gray-300 text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    <FiPlayCircle /> Watch Demo
                  </motion.a>
                )}
              </div>
            </motion.div>

            {/* Hero visual with parallax */}
            <motion.div
              style={{ y: heroVisualY, opacity: heroVisualOpacity }}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5"
            >
              {hero?.placeholder ? (
                <PlaceholderHero icon={hero.icon} accent={hero.accent} darkMode={darkMode} />
              ) : (
                <FramedScreenshot
                  src={hero?.image}
                  alt={title}
                  darkMode={darkMode}
                  maxHeight="max-h-[440px]"
                  priority
                />
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      {overview && (
        <section className={subtleCls}>
          <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
            <SectionHeader kicker="Overview" title="Problem & Approach" darkMode={darkMode} />
            <div className="grid md:grid-cols-2 gap-6">
              {overview.problem && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  className={`p-6 rounded-2xl gradient-border transition-shadow hover:shadow-xl ${cardCls}`}
                >
                  <h3 className={`text-xs uppercase tracking-widest font-semibold mb-3 ${darkMode ? "text-red-400" : "text-red-500"}`}>
                    The Problem
                  </h3>
                  <p className={`text-base leading-relaxed ${mutedTextCls}`}>{overview.problem}</p>
                </motion.div>
              )}
              {overview.solution && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ y: -4 }}
                  className={`p-6 rounded-2xl gradient-border transition-shadow hover:shadow-xl ${cardCls}`}
                >
                  <h3 className={`text-xs uppercase tracking-widest font-semibold mb-3 ${darkMode ? "text-emerald-400" : "text-emerald-600"}`}>
                    The Solution
                  </h3>
                  {typeof overview.solution === "string" ? (
                    <p className={`text-base leading-relaxed ${mutedTextCls}`}>{overview.solution}</p>
                  ) : (
                    <>
                      {overview.solution.intro && (
                        <p className={`text-base leading-relaxed ${mutedTextCls}`}>{overview.solution.intro}</p>
                      )}
                      {overview.solution.bullets && (
                        <motion.ul
                          variants={bulletList}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, margin: "-50px" }}
                          className="mt-3 space-y-2.5"
                        >
                          {overview.solution.bullets.map((b, i) => (
                            <motion.li
                              key={i}
                              variants={bulletItem}
                              className={`flex items-start gap-2.5 text-base leading-relaxed ${mutedTextCls}`}
                            >
                              <FiCheckCircle className={`mt-1 shrink-0 ${darkMode ? "text-emerald-400" : "text-emerald-600"}`} />
                              <span dangerouslySetInnerHTML={{ __html: b }} />
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </>
                  )}
                </motion.div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* STATS */}
      {stats.length > 0 && (
        <section className={darkMode ? "bg-gray-950 border-y border-white/5" : "bg-white border-y border-gray-200"}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
            <div className={`grid ${stats.length === 4 ? "grid-cols-2 lg:grid-cols-4" : "grid-cols-2 lg:grid-cols-3"} gap-x-6 gap-y-10`}>
              {stats.map((s, i) => (
                <motion.div
                  key={`${s.label}-${i}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold gradient-text leading-none tracking-tight">
                    {s.value}
                  </div>
                  <div className={`mt-3 text-xs uppercase tracking-widest font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    {s.label}
                  </div>
                  {s.note && (
                    <div className={`mt-1.5 text-[11px] ${mutedTextCls}`}>{s.note}</div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* TECH STACK */}
      {techStack.length > 0 && (
        <section className={darkMode ? "bg-gray-950 border-y border-white/5" : "bg-white border-y border-gray-200"}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <SectionHeader kicker="Built with" title="Technology Stack" darkMode={darkMode} />
            <motion.div
              variants={bulletList}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-wrap items-center gap-x-10 gap-y-5 text-2xl"
            >
              {techStack.map((t) => (
                <motion.div
                  key={t.name}
                  variants={bulletItem}
                  whileHover={{ y: -3, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`flex items-center gap-2.5 transition-colors ${
                    darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <span className="text-3xl">{t.icon}</span>
                  <span className="text-sm font-medium">{t.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* FEATURES */}
      {features.length > 0 && (
        <section className={subtleCls}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-28">
            <SectionHeader kicker="What's inside" title="Key Features" darkMode={darkMode} />
            <div className="space-y-20 lg:space-y-28">
              {features.map((f, i) => {
                const images = f.images || (f.image ? [f.image] : []);
                const reverse = i % 2 === 1;
                return (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className={`grid lg:grid-cols-12 gap-10 items-center ${reverse ? "lg:[direction:rtl]" : ""}`}
                  >
                    <div className={`lg:col-span-5 ${reverse ? "lg:[direction:ltr]" : ""}`}>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-brand-gradient text-white font-bold shadow-glow text-sm"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </motion.span>
                      <h3 className="mt-5 text-2xl lg:text-3xl font-bold tracking-tight">{f.title}</h3>
                      <p className={`mt-3 text-base leading-relaxed ${mutedTextCls}`}>{f.description}</p>
                      {f.bullets && (
                        <motion.ul
                          variants={bulletList}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, margin: "-50px" }}
                          className="mt-5 space-y-2"
                        >
                          {f.bullets.map((b, k) => (
                            <motion.li
                              key={k}
                              variants={bulletItem}
                              className={`flex items-start gap-2.5 text-sm leading-relaxed ${mutedTextCls}`}
                            >
                              <FiCheckCircle className={`mt-0.5 shrink-0 ${darkMode ? "text-blue-400" : "text-blue-600"}`} />
                              <span>{b}</span>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </div>

                    {images.length > 0 && (
                      <div className={`lg:col-span-7 grid ${images.length > 1 ? "sm:grid-cols-2" : ""} gap-5 ${reverse ? "lg:[direction:ltr]" : ""}`}>
                        {images.map((src, k) => (
                          <FramedScreenshot
                            key={k}
                            src={src}
                            alt={`${f.title} screenshot ${k + 1}`}
                            darkMode={darkMode}
                            maxHeight={images.length > 1 ? "max-h-[280px]" : "max-h-[380px]"}
                          />
                        ))}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* DIAGRAMS */}
      {diagrams && (
        <section className={darkMode ? "bg-gray-950" : "bg-white"}>
          <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
            <SectionHeader kicker="Architecture" title={diagrams.title} darkMode={darkMode} />
            {diagrams.description && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`mb-10 max-w-3xl ${mutedTextCls}`}
              >
                {diagrams.description}
              </motion.p>
            )}
            <div className={`grid ${diagrams.images.length > 1 ? "md:grid-cols-2" : ""} gap-6`}>
              {diagrams.images.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <FramedScreenshot
                    src={src}
                    alt={`Diagram ${i + 1}`}
                    darkMode={darkMode}
                    maxHeight="max-h-[520px]"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* EXTERNAL LIBRARIES */}
      {externalLibraries.length > 0 && (
        <section className={subtleCls}>
          <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
            <SectionHeader kicker="Dependencies" title="External Libraries" darkMode={darkMode} />
            <div className="grid sm:grid-cols-2 gap-4">
              {externalLibraries.map((lib, i) => (
                <motion.div
                  key={lib.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ y: -3, scale: 1.01 }}
                  className={`p-5 rounded-xl gradient-border transition-shadow hover:shadow-xl ${cardCls}`}
                >
                  <h4 className="font-mono text-sm font-bold gradient-text">{lib.name}</h4>
                  <p className={`mt-1.5 text-sm ${mutedTextCls}`}>{lib.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* DEMO VIDEO */}
      {demoVideo && (
        <section id="demo" className={darkMode ? "bg-gray-950" : "bg-white"}>
          <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
            <SectionHeader kicker="See it live" title="Demo Video" darkMode={darkMode} />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className={`relative p-2 rounded-2xl shadow-2xl shadow-glow-image ring-1 ${
                darkMode
                  ? "bg-gradient-to-br from-gray-800 to-gray-900 ring-white/10"
                  : "bg-gradient-to-br from-slate-100 to-slate-200 ring-black/5"
              }`}
            >
              <div className={`relative overflow-hidden rounded-xl ${darkMode ? "bg-gray-950" : "bg-white"}`}>
                <WindowChrome />
                <video controls className="w-full aspect-video bg-black">
                  <source src={demoVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* NEXT CTA */}
      <section className={darkMode ? "bg-gray-950 border-t border-white/5" : "bg-gray-50 border-t border-gray-200"}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <div>
              <p className={`text-sm uppercase tracking-widest font-semibold ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
                Keep exploring
              </p>
              <h2 className="mt-2 text-2xl lg:text-3xl font-extrabold tracking-tight">
                See more <span className="gradient-text">projects</span>
              </h2>
            </div>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-brand-gradient shadow-glow hover:shadow-glow-lg transition-shadow"
            >
              All projects
              <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}