import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { FiMail, FiUser, FiMessageSquare } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false); // End loading
    }
  };

  return (
    <div className="dark:bg-gray-900 dark:text-white min-h-screen">
      <Navbar />
      <main className="container mx-auto p-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold text-center mb-6"
        >
          Get in Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-lg text-center text-gray-600 dark:text-gray-300 mb-6 max-w-xl mx-auto"
        >
          Have a project in mind or just want to say hello? Drop me a message and
          I'll get back to you as soon as possible.
        </motion.p>
        <motion.form
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          onSubmit={handleSubmit}
          className="flex flex-col max-w-xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl space-y-6"
        >
          <div className="relative">
            <FiUser className="absolute left-3 top-3 text-gray-500 dark:text-gray-400" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="pl-10 border p-3 w-full rounded-md dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onChange={handleChange}
              value={formData.name}
              required
            />
          </div>
          <div className="relative">
            <FiMail className="absolute left-3 top-3 text-gray-500 dark:text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="pl-10 border p-3 w-full rounded-md dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onChange={handleChange}
              value={formData.email}
              required
            />
          </div>
          <div className="relative">
            <FiMessageSquare className="absolute left-3 top-3 text-gray-500 dark:text-gray-400" />
            <textarea
              name="message"
              placeholder="Your Message"
              className="pl-10 border p-3 w-full h-32 rounded-md dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onChange={handleChange}
              value={formData.message}
              required
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: isLoading ? 1 : 1.05 }}
            whileTap={{ scale: isLoading ? 1 : 0.95 }}
            type="submit"
            disabled={isLoading} // Disable button while loading
            className={`${
              isLoading ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-600"
            } text-white p-4 rounded-md text-lg font-semibold transition-all shadow-lg flex items-center justify-center`}
          >
            {isLoading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
            ) : (
              "Send Message"
            )}
          </motion.button>
        </motion.form>
      </main>
      <Footer />
    </div>
  );
}
