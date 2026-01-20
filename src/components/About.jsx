import React from "react";

export default function About() {
  return (
    <div className="about-right">
      <h2>About Me</h2>

      <p className="about-text">
        I am a <span className="highlight">Full Stack Java Developer</span> who
        enjoys building <span className="highlight">scalable</span>,
        <span className="highlight"> secure</span>, and
        <span className="highlight"> user-friendly</span> web applications.
      </p>

      <ul className="about-points">
        <li>Build end-to-end applications using Java & Spring Boot</li>
        <li>Design RESTful APIs and scalable backend systems</li>
        <li>Create responsive frontend using React</li>
        <li>Write clean, optimized, and maintainable code</li>
        <li>Continuously learn and improve system performance</li>
      </ul>
    </div>
  );
}
