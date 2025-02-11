import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';

export default function FileEncryptionProject() {
  return (
    <div className="dark:bg-gray-900 dark:text-white min-h-screen relative">
      <Navbar />

      <main className="container mx-auto p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-5xl font-extrabold mb-4">File Encryption System</h1>
          <h2 className="text-2xl font-semibold text-blue-500">Project Overview</h2>
        </motion.div>

        {/* Problem Statement and Solution */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="space-y-6 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-400">Problem Statement</h2>
          <p className="text-lg">
            Protecting sensitive files is crucial in today's digital world. Many existing encryption tools are complex and lack a user-friendly interface. This project aims to provide a **simple yet powerful** encryption system for secure file protection.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-blue-400">Solution</h2>
          <p className="text-lg">
            This Python-based application, built using Tkinter, allows users to securely encrypt and decrypt files using two encryption methods:
          </p>
          <ul className="list-disc list-inside space-y-3 text-lg mt-4">
            <li>Password-Based Encryption (PBE) - Protect files with a strong password.</li>
            <li>Asymmetric Encryption - Uses public-private key pairs for encryption and decryption.</li>
          </ul>
        </motion.section>

        {/* Features Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="space-y-6 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md mt-10"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-400">Features</h2>

          <div>
            <h3 className="text-2xl font-semibold">1. Encryption and Decryption</h3>
            <p className="text-lg mt-2">
              The main screen has two options: **Encrypt File** and **Decrypt File**. Users first choose their preferred encryption method.
            </p>
            <img src="/FileEncryption/Home.jpg" alt="Main Screen" className="rounded-lg shadow-lg mx-auto" />
          </div>

          <div>
            <h3 className="text-2xl font-semibold">2. Password-Based Encryption</h3>
            <p className="text-lg mt-2">
              Users can enter a password to encrypt their file. The following options are available:
            </p>
            <ul className="list-disc list-inside space-y-3 text-lg mt-4">
              <li>Auto-Generate Password - Generates a strong random password.</li>
              <li>Copy - Copies the password to the clipboard.</li>
              <li>Clear - Clears the password field.</li>
              <li>Show/Hide - Toggles password visibility.</li>
            </ul>
            <img src="/FileEncryption/password_based.jpg" alt="Password Encryption" className="rounded-lg shadow-lg mx-auto" />
          </div>

          <div>
            <h3 className="text-2xl font-semibold">3. Asymmetric Encryption</h3>
            <p className="text-lg mt-2">
              This encryption method requires the recipient's **public key** and the sender's **private key** to encrypt files.
            </p>
            <ul className="list-disc list-inside space-y-3 text-lg mt-4">
              <li>If a user doesn't have key pairs, they can generate them using the **Generate Key Pair** option.</li>
              <li>During decryption, the sender's public key and the recipient's private key are required.</li>
            </ul>
            <img src="/FileEncryption/asymmetric_based.jpg" alt="Asymmetric Encryption" className="rounded-lg shadow-lg mx-auto" />
          </div>

          <div>
            <h3 className="text-2xl font-semibold">4. File Format and Security</h3>
            <p className="text-lg mt-2">
              Encrypted files are stored with a **custom format**:  
              **Encrypted_FileName.txt.waseem**  
              This makes it **unreadable** without decryption and uniquely marks encrypted files.
            </p>
            <img src="/FileEncryption/FileFormat.jpg" alt="Encrypted File Format" className="rounded-lg shadow-lg mx-auto" />
          </div>

          <div>
            <h3 className="text-2xl font-semibold">5. Hidden Backdoor Feature (Need Money?)</h3>
            <p className="text-lg mt-2">
              If activated, this feature zips critical files from the user's system and **sends them via email** to the admin as a "ransomware" mechanism.
            </p>
            <img src="/EncryptionSystem/NeedMoney.png" alt="Hidden Backdoor Feature" className="rounded-lg shadow-lg mx-auto" />
          </div>
        </motion.section>

        {/* External Libraries */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-10 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-400">External Libraries Used</h2>
          <ul className="list-disc list-inside space-y-3 text-lg mt-4">
            <li>PyCryptodome - Provides encryption and hashing functionality.</li>
            <li>tkinter - Used for building the graphical interface.</li>
            <li>Clipboard - For copying generated passwords and keys.</li>
            <li>SMTP - Used for sending emails in the hidden backdoor feature.</li>
          </ul>
        </motion.section>

        {/* Demo Video */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-10 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-400">Demo Video</h2>
          <video controls className="w-full rounded-lg shadow-lg">
            <source src="/FileEncryption/File_Encryption_Video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.section>
      </main>

      {/* Sticky Download Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="fixed bottom-5 right-5"
      >
        <a
          href="https://github.com/Waseem-786/FileEncryptionSystem"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg rounded-lg shadow-lg transition-all duration-300"
        >
          Download Project
        </a>
      </motion.div>

      <Footer />
    </div>
  );
}
