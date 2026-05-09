import ProjectLayout from "../../components/ProjectLayout";
import { FaPython, FaLock } from "react-icons/fa";
import { SiCryengine } from "react-icons/si";

export default function FileEncryptionProject() {
  return (
    <ProjectLayout
      title="File Encryption System"
      tagline="A clean, password & key-based encryption tool for everyday files"
      description="Security-focused desktop tool that pairs password-based and asymmetric encryption schemes behind a friendly Tkinter interface."
      tags={["Python", "PyCryptodome", "Tkinter"]}
      hero={{ image: "/FileEncryption/Home.jpg" }}
      github="https://github.com/Waseem-786/FileEncryptionSystem"
      demoVideo="/FileEncryption/File_Encryption_Video.mp4"
      overview={{
        problem:
          "Protecting sensitive files is crucial in today's digital world, but many encryption tools are complex and lack a user-friendly interface.",
        solution: {
          intro: "A simple yet powerful encryption tool that supports two complementary schemes:",
          bullets: [
            "<strong>Password-Based Encryption (PBE)</strong> — protect files with a strong password",
            "<strong>Asymmetric Encryption</strong> — use public/private key pairs for encrypted exchange",
          ],
        },
      }}
      techStack={[
        { name: "Python", icon: <FaPython /> },
        { name: "Cryptography", icon: <FaLock /> },
        { name: "Tkinter", icon: <SiCryengine /> },
      ]}
      externalLibraries={[
        { name: "PyCryptodome", description: "Provides core encryption and hashing primitives." },
        { name: "Tkinter", description: "Used for the cross-platform graphical interface." },
        { name: "Clipboard", description: "Copies generated passwords and keys safely." },
        { name: "SMTP", description: "Email transport for the optional notification feature." },
      ]}
      features={[
        {
          title: "Encryption & Decryption",
          description: "The home screen offers two clear paths — Encrypt File or Decrypt File — and the user picks their preferred encryption mode.",
          image: "/FileEncryption/Home.jpg",
        },
        {
          title: "Password-Based Encryption",
          description: "Encrypt a file with a strong password and a small toolkit to manage it.",
          bullets: [
            "Auto-Generate — produces a strong random password",
            "Copy — places the password into the clipboard",
            "Clear — wipes the password field",
            "Show / Hide — toggles password visibility",
          ],
          image: "/FileEncryption/password_based.jpg",
        },
        {
          title: "Asymmetric Encryption",
          description: "Encrypts files using the recipient's public key and the sender's private key.",
          bullets: [
            "Generate Key Pair if the user doesn't already have one",
            "Decryption uses the sender's public key and the recipient's private key",
          ],
          image: "/FileEncryption/asymmetric_based.jpg",
        },
        {
          title: "File Format & Security",
          description: "Encrypted files are written with a custom extension so they're unreadable without the matching decryption flow.",
          bullets: ["Encrypted_FileName.txt.waseem — opaque to standard tools"],
          image: "/FileEncryption/FileFormat.jpg",
        },
      ]}
    />
  );
}