import ProjectLayout from "../../components/ProjectLayout";
import { FaPhp, FaDatabase, FaJsSquare, FaHtml5, FaCss3Alt } from "react-icons/fa";

export default function LMS() {
  return (
    <ProjectLayout
      title="Learning Management System"
      tagline="A digital learning platform with role-based dashboards"
      description="A complete LMS featuring distinct dashboards for Admins, Faculty, and Students — covering course management, student enrollment, and class scheduling."
      tags={["PHP", "MySQL", "JavaScript", "HTML", "CSS"]}
      hero={{ image: "/LMS/Home.png" }}
      github="https://github.com/Waseem-786/DB_Project"
      demoVideo="/LMS/LMSVideo.mp4"
      overview={{
        problem:
          "Traditional learning management systems often suffer from a lack of real-time tracking, poor user interfaces, and inefficient role management for admins, students, and faculty.",
        solution: {
          intro: "A unified web platform with separate, role-aware experiences:",
          bullets: [
            "Separate dashboards for <strong>Admins, Faculty, and Students</strong>",
            "Efficient <strong>course management</strong>, student enrollment, and faculty assignments",
            "Real-time tracking of <strong>class schedules and assignments</strong>",
            "Secure and responsive <strong>profile management</strong>",
          ],
        },
      }}
      techStack={[
        { name: "PHP", icon: <FaPhp /> },
        { name: "MySQL", icon: <FaDatabase /> },
        { name: "JavaScript", icon: <FaJsSquare /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
      ]}
      features={[
        { title: "Home Page", description: "Landing page with navigation to portal and key LMS sections.", image: "/LMS/Home.png" },
        { title: "Portal Page", description: "User role selection: Admin, Faculty, or Student.", image: "/LMS/Portal.png" },
        { title: "Admin Dashboard", description: "Manage accounts, courses, and student enrollments from a single workspace.", image: "/LMS/Admin_Dashboard.png" },
        { title: "Faculty Dashboard", description: "Manage assigned classes and track student progress over time.", image: "/LMS/Faculty_Dashboard.png" },
        { title: "Student Dashboard", description: "View enrolled courses, class schedules, and assignment status.", image: "/LMS/Student_Dashboard.png" },
        { title: "Course Management", description: "Admins can create, edit, and assign courses with full lifecycle control.", image: "/LMS/Course_Management.png" },
      ]}
      diagrams={{
        title: "Entity-Relationship Diagram",
        description: "The database schema underpinning the LMS, modeling users, courses, enrollments, and the relationships between them.",
        images: ["/LMS/ERD.png"],
      }}
    />
  );
}