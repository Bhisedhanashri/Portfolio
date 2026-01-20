import React from "react";

export default function Education() {
  const educationData = [
    {
      year: "2023 – Present",
      degree: "B.E. Computer Engineering",
      institute: "SPPU, Rajiv Gandhi College of Engineering, Ahilyanagar",
      score: "SGPA: 8.0",
    },
    {
      year: "2022",
      degree: "HSC (Science)",
      institute: "Maharashtra State Board, Maloji Raje Vidyalaya",
      score: "65.50%",
    },
    {
      year: "2020",
      degree: "SSC",
      institute: "Maharashtra State Board, New English School",
      score: "90.80%",
    },
  ];

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>

        <div className="education-horizontal">
          {educationData.map((edu, index) => (
            <div className="education-row" key={index}>
              <div className="edu-box">
                <span className="edu-year">{edu.year}</span>

                <h3>{edu.degree}</h3>
                <p className="edu-institute">{edu.institute}</p>
                <span className="edu-score">{edu.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
