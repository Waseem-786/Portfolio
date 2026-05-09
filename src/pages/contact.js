import { useDarkMode } from "../context/DarkModeContext";
import { useState } from "react";
import MetaHead from "../components/MetaHead";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiUser, FiMessageSquare, FiPhone, FiMapPin, FiCheck, FiAlertCircle, FiArrowRight } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const INFO = [
  { icon: <FiMail />, label: "Email", value: "engrwaseemshahzad134@gmail.com", link: "mailto:engrwaseemshahzad134@gmail.com" },
  { icon: <FiPhone />, label: "Phone", value: "+92 341 9648099", link: "tel:+923419648099" },
  { icon: <FiMapPin />, label: "Location", value: "Faisalabad, Pakistan" },
];

export default function Contact() {
  const { darkMode } = useDarkMode();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState(null); // { type: 'success' | 'error', text: string }

  const showToast = (type, text) => {
    setToast({ type, text });
    setTimeout(() => setToast(null), 4000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        showToast("success", "Message sent! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        showToast("error", "Something went wrong. Please try again.");
      }
    } catch (err) {
      showToast("error", "Network error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const inputCls = `pl-11 pr-4 py-3 w-full rounded-xl border text-sm transition-all duration-200 outline-none ${
    darkMode
      ? "bg-white/5 border-white/10 text-white placeholder-gray-500 focus:border-blue-500 focus:bg-white/10"
      : "bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
  }`;

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-950 text-gray-200" : "bg-white text-gray-800"}`}>
      <MetaHead title="Contact — Waseem Shahzad" description="Get in touch — let's talk about your project, ideas, or collaboration." />
      <Navbar />

      <main className="relative">
        <section className="relative overflow-hidden">
          <div className={`absolute inset-0 -z-10 ${darkMode ? "bg-grid-dark" : "bg-grid-light"}`} />
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] -z-10 blur-3xl rounded-full ${darkMode ? "bg-violet-700/30" : "bg-violet-300/40"}`} />

          <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12 text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`text-sm uppercase tracking-widest font-semibold ${darkMode ? "text-blue-400" : "text-blue-600"}`}
            >
              Contact
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
            >
              Let's <span className="gradient-text">build</span> something.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className={`mt-4 max-w-xl mx-auto text-base lg:text-lg ${darkMode ? "text-gray-400" : "text-gray-600"}`}
            >
              Have a project, an opening, or just a question? Drop a note — I usually reply within a day.
            </motion.p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Info card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5"
            >
              <div className={`relative h-full overflow-hidden rounded-2xl p-8 lg:p-10 text-white shadow-glow-lg ${darkMode ? "" : ""} bg-brand-gradient`}>
                <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                <div className="relative">
                  <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight">Contact information</h2>
                  <p className="mt-2 text-white/85 text-sm leading-relaxed">
                    Reach out via any of these channels — whichever works best for you.
                  </p>

                  <div className="mt-8 space-y-5">
                    {INFO.map((item) => {
                      const inner = (
                        <div className="flex items-start gap-4">
                          <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/15 backdrop-blur-sm shrink-0">
                            {item.icon}
                          </span>
                          <div className="min-w-0">
                            <p className="text-xs uppercase tracking-widest text-white/70">{item.label}</p>
                            <p className="text-sm font-medium break-all">{item.value}</p>
                          </div>
                        </div>
                      );
                      return item.link ? (
                        <a key={item.label} href={item.link} className="block hover:opacity-90 transition-opacity">
                          {inner}
                        </a>
                      ) : (
                        <div key={item.label}>{inner}</div>
                      );
                    })}
                  </div>

                  <div className="mt-10 pt-8 border-t border-white/15">
                    <p className="text-xs uppercase tracking-widest text-white/70 mb-3">Find me online</p>
                    <div className="flex items-center gap-3">
                      <a
                        href="https://github.com/Waseem-786"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 transition-colors"
                      >
                        <FaGithub size={18} />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/waseem-shahzad-b4854522a"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 transition-colors"
                      >
                        <FaLinkedin size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <form
                onSubmit={handleSubmit}
                className={`p-8 lg:p-10 rounded-2xl gradient-border space-y-5 ${
                  darkMode ? "bg-gray-900" : "bg-white shadow-xl"
                }`}
              >
                <div>
                  <label className={`block text-xs uppercase tracking-widest font-semibold mb-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                    Your Name
                  </label>
                  <div className="relative">
                    <FiUser className={`absolute left-4 top-1/2 -translate-y-1/2 ${darkMode ? "text-gray-500" : "text-gray-400"}`} />
                    <input
                      type="text"
                      name="name"
                      placeholder="Jane Doe"
                      className={inputCls}
                      onChange={handleChange}
                      value={formData.name}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-xs uppercase tracking-widest font-semibold mb-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                    Email
                  </label>
                  <div className="relative">
                    <FiMail className={`absolute left-4 top-1/2 -translate-y-1/2 ${darkMode ? "text-gray-500" : "text-gray-400"}`} />
                    <input
                      type="email"
                      name="email"
                      placeholder="you@company.com"
                      className={inputCls}
                      onChange={handleChange}
                      value={formData.email}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-xs uppercase tracking-widest font-semibold mb-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                    Message
                  </label>
                  <div className="relative">
                    <FiMessageSquare className={`absolute left-4 top-4 ${darkMode ? "text-gray-500" : "text-gray-400"}`} />
                    <textarea
                      name="message"
                      placeholder="Tell me about your project, timeline, and what you're looking for..."
                      rows={6}
                      className={`${inputCls} resize-none pt-3`}
                      onChange={handleChange}
                      value={formData.message}
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white transition-all ${
                    isLoading
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-brand-gradient shadow-glow hover:shadow-glow-lg"
                  }`}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <FiArrowRight />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <div
              className={`flex items-center gap-3 px-5 py-4 rounded-xl shadow-2xl border ${
                toast.type === "success"
                  ? "bg-emerald-500 text-white border-emerald-400"
                  : "bg-red-500 text-white border-red-400"
              }`}
            >
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20">
                {toast.type === "success" ? <FiCheck /> : <FiAlertCircle />}
              </span>
              <p className="text-sm font-medium">{toast.text}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
