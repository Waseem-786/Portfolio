import ProjectLayout from "../../components/ProjectLayout";
import { FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

export default function RestaurantManagementSystem() {
  return (
    <ProjectLayout
      title="Restaurant Management System"
      tagline="An automated workflow for orders, billing, and table service"
      description="Java JSwing desktop application that streamlines restaurant operations — order entry, dine-in & takeaway flows, table selection, and automated billing."
      tags={["Java", "JSwing", "MySQL"]}
      hero={{ image: "/RMS/Dashboard.jpg" }}
      github="https://github.com/Waseem-786/Restaurant-Management-System.git"
      demoVideo="/RMS/RMS_Video.mp4"
      overview={{
        problem:
          "Traditional restaurant management involves manual processes that lead to inefficiencies, mismanagement of orders, and billing errors — resulting in a poor customer experience and increased workload for staff.",
        solution: {
          intro:
            "RMS provides an automated, user-friendly system that allows staff to manage orders, calculate bills, and handle both dine-in and takeaway options with ease — ensuring accuracy, efficiency, and a smoother workflow.",
        },
      }}
      techStack={[
        { name: "Java", icon: <FaJava /> },
        { name: "JSwing", icon: <FaJava /> },
        { name: "MySQL", icon: <SiMysql /> },
      ]}
      externalLibraries={[
        { name: "KControls", description: "UI elements and transitions for a polished JSwing experience." },
        { name: "KGradientPanel", description: "Gradient panel effects to modernize the desktop UI." },
      ]}
      features={[
        {
          title: "User Signup & Login",
          description: "Secure authentication for authorized restaurant staff with persistent sessions.",
          images: ["/RMS/Signup.jpg", "/RMS/Login.jpg"],
        },
        {
          title: "Dine-In or Takeaway",
          description: "Choose between Dine-In and Takeaway flows. For Dine-In, capture the number of guests and table number.",
          images: ["/RMS/Order_Type.jpg", "/RMS/No_of_People.jpg"],
        },
        {
          title: "Menu Dashboard",
          description: "Categorized menu options — Chinese, BBQ, Beverages, and more — surfaced on a clear, fast dashboard.",
          image: "/RMS/Dashboard.jpg",
        },
        {
          title: "Bill Calculation",
          description: "Calculates totals and remaining change automatically once cash received is entered, removing arithmetic errors.",
          image: "/RMS/Bill.jpg",
        },
      ]}
    />
  );
}