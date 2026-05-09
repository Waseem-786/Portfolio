import ProjectLayout from "../../components/ProjectLayout";
import { FaPhp, FaDatabase } from "react-icons/fa";
import { SiSocketdotio, SiMysql, SiJavascript } from "react-icons/si";
import { FiMessageSquare } from "react-icons/fi";

export default function ChatNetworking() {
  return (
    <ProjectLayout
      title="Chat & Networking in LMS"
      tagline="Real-time chat and peer networking on top of the LMS"
      description="An extension of the Learning Management System: real-time messaging between students, faculty, and admins plus a lightweight networking layer for class-wide discussions."
      tags={["PHP", "Sockets", "MySQL", "JavaScript"]}
      hero={{ placeholder: true, icon: <FiMessageSquare />, accent: "from-cyan-500 to-blue-600" }}
      github="https://github.com/Waseem-786"
      overview={{
        problem:
          "The base LMS gave each role a dashboard but no way to talk to each other. Students couldn't ask faculty quick questions, and there was no class-wide thread for announcements or peer discussion.",
        solution: {
          intro: "A real-time messaging and networking module bolted onto the LMS:",
          bullets: [
            "<strong>One-to-one chat</strong> between students, faculty, and admins",
            "<strong>Class-wide threads</strong> for announcements and group discussion",
            "<strong>Socket-based delivery</strong> with online/offline presence",
            "<strong>Persistent history</strong> so messages survive reconnects",
          ],
        },
      }}
      techStack={[
        { name: "PHP", icon: <FaPhp /> },
        { name: "Sockets", icon: <SiSocketdotio /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Database", icon: <FaDatabase /> },
      ]}
      features={[
        {
          title: "Direct Messaging",
          description: "One-to-one conversations between any two roles, with delivery state and persistent history.",
        },
        {
          title: "Class-wide Threads",
          description: "Per-class discussion threads where faculty can post announcements and students can reply.",
        },
        {
          title: "Presence & Typing",
          description: "Real-time presence indicators and typing hints so conversations feel alive, not just like email.",
        },
        {
          title: "Notifications",
          description: "Unread badges in the LMS shell so users always know there's a new message waiting.",
        },
      ]}
    />
  );
}