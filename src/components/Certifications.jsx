import React from "react";
import { FaCertificate } from "react-icons/fa";

export default function Certifications() {
  const certifications = [
    {
      title: "Full Stack Java Programming Masterclass",
      organization: "The Kiran Academy, Pune",
      year: "2026",
      details:
        "Comprehensive training in Java, Spring Boot, React.js, and MySQL database.",
    },
    {
      title: "Web Development",
      organization: "Unified Mentor",
      year: "2025",
      details:
        "Practical training in front-end technologies like HTML, CSS, and JavaScript.",
    },
    {
      title: "Academic Excellence Recognition",
      organization: "SPPU / Rajiv Gandhi College of Engineering",
      year: "During B.E.",
      details:
        "Awarded for outstanding performance in academics and extracurricular activities.",
    },
  ];

  return (
    <section id="certifications" className="cert-section">
      <div className="container">
        <h2 className="section-title">Certifications & Awards</h2>

        {/* Outer Box */}
        <div >
          <div className="cert-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-card">
                <div className="cert-header">
                  <FaCertificate className="cert-icon" />
                  <span className="cert-year">{cert.year}</span>
                </div>

                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-org">{cert.organization}</p>
                <p className="cert-desc">{cert.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
