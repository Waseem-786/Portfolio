import ProjectLayout from "../../components/ProjectLayout";
import { FaDatabase, FaLock } from "react-icons/fa";
import { SiDjango, SiFlutter, SiMongodb } from "react-icons/si";

export default function DigitalOBESystem() {
  return (
    <ProjectLayout
      title="Digital OBE System"
      tagline="Final year project — a digital outcome-based education platform"
      description="A web & mobile platform built with Flutter and Django to streamline course outline creation, assessment management, and the accreditation approval workflow."
      tags={["Flutter", "Django", "Django REST", "MongoDB"]}
      hero={{ placeholder: true, icon: <FaDatabase />, accent: "from-blue-500 to-indigo-600" }}
      github="https://github.com/Waseem-786/OBE-System-App"
      demoVideo="/FYP/FYP_Video.mp4"
      overview={{
        problem:
          "Many educational institutions struggle with manual assessment processes, inaccurate CLO–PLO mapping, and inefficient accreditation workflows. The result is administrative overhead, inconsistencies in quality assurance, and a lack of digital tools for educators.",
        solution: {
          intro:
            "A web-based platform that streamlines course outlines, assessment management, and accreditation approval — ensuring CLOs, PLOs, and PEOs are mapped correctly with far less paperwork.",
          bullets: [
            "Secure authentication with role-based access control",
            "Dynamic mapping of CLOs, PLOs, and PEOs",
            "Automated assessment creation & lifecycle management",
            "Digitalized accreditation approval workflow",
            "Real-time analytics and reporting for educators",
          ],
        },
      }}
      techStack={[
        { name: "Flutter", icon: <SiFlutter /> },
        { name: "Django", icon: <SiDjango /> },
        { name: "Django REST", icon: <SiDjango /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "RBAC", icon: <FaLock /> },
      ]}
      features={[
        {
          title: "Authentication & RBAC",
          description: "Secure login with role-based access control across admins, faculty, and accreditation reviewers.",
        },
        {
          title: "CLO / PLO / PEO Mapping",
          description: "Dynamic mapping interface so educators can align learning outcomes with program and educational objectives.",
        },
        {
          title: "Assessment Workflow",
          description: "Create, distribute, and review assessments end-to-end without leaving the platform.",
        },
        {
          title: "Accreditation Approval",
          description: "A digitalized approval pipeline replaces email-and-paperwork chains, with full traceability.",
        },
        {
          title: "Analytics & Reporting",
          description: "Real-time dashboards summarize outcome attainment and assessment performance for educators.",
        },
      ]}
    />
  );
}