import React, { useRef } from "react";
import { FaCalendarAlt, FaTools } from "react-icons/fa";

export default function Projects() {
  const gridRef = useRef(null);

  const projects = [
    {
      title: "AI Powered Diet Assistant",
      timeline: "Sep 2025 - Jan 2026",
      stack: "Spring AI, Java, Spring Boot, MySQL, Flutter",
      desc:
        "Developed an AI-powered system providing personalized meal plans and nutrition guidance.",
      image: "/aiDiet.jpg",
      //  link: "https://example.com/ai-diet"
    },
    {
      title: "Student Attendance System",
      timeline: "Apr 2025 - Jun 2025",
      stack: "Java, Spring Boot, MySQL, React.js",
      desc:
        "Digitized attendance tracking by building REST APIs for data filtering and automated reporting.",
      image: "/attendance.jpeg"
    },
    {
      title: "Hotel Management System",
      timeline: "Apr 2025 - Jun 2025",
      stack: "Java, Spring Boot, MySQL, React.js",
      desc:
        "Digitized hotel management processes for reservations and billing using a full-stack solution.",
      image: "/hotel.jpeg",
       link: "https://github.com/Bhisedhanashri/Hotel-Management-System"
    },
    {
      title: "Employee Payroll Management System",
      timeline: "Apr 2025 - Jun 2025",
      stack: "Java, Spring Boot, MySQL, React.js",
      desc:
        "Automated payroll calculations and reporting for HR teams with a secure web interface.",
      image: "/payroll.jpeg",
       link: "https://github.com/Bhisedhanashri/Employee-Management-Payroll"
    }
  ];

  const scrollLeft = () => {
    gridRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    gridRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <section className="projects-section">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-box">
        <div className="projects-controls">
          <button onClick={scrollLeft}>‹</button>
          <button onClick={scrollRight}>›</button>
        </div>

        <div className="projects-grid horizontal" ref={gridRef}>
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              
              {/* PROJECT IMAGE */}
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-header">
                <span className="project-date">
                  <FaCalendarAlt /> {project.timeline}
                </span>
              </div>

              <h3 className="project-title">{project.title}</h3>

              <p className="project-stack">
                <FaTools /> {project.stack}
              </p>

              <p className="project-description">{project.desc}</p>
              <button
  className="project-button"
  onClick={() => window.open(project.link, "_blank")}
>
  Visit
</button>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
