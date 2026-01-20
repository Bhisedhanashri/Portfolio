export default function Skills() {
  const techStack = [
    { name: "Java", color: "#f89820", level: "90%" },
    { name: "Spring Boot", color: "#6db33f", level: "85%" },
    { name: "React.js", color: "#61dafb", level: "80%" },
    { name: "MySQL", color: "#00758f", level: "85%" },
    { name: "React Native", color: "#61dafb", level: "75%" },
    { name: "Flutter", color: "#02569b", level: "75%" },
    { name: "HTML/CSS", color: "#e34c26", level: "95%" },
    { name: "JavaScript", color: "#f7df1e", level: "85%" },
  ];

  return (
    <section id="skills-cloud" className="section">
      <div className="container">
        <h2 style={{ textAlign: 'center' }}>Tech Stack</h2>
        <div className="skills-grid-icons">
          {techStack.map((tech, index) => (
            <div key={index} className="tech-card" style={{ "--hover-color": tech.color }}>
              <div className="tech-icon-circle">
                {/* Once you have icon images/SVGs, place them here */}
                <span className="tech-initial">{tech.name.charAt(0)}</span>
              </div>
              <h4>{tech.name}</h4>
              <div className="mini-bar">
                <div className="mini-fill" style={{ width: tech.level, backgroundColor: tech.color }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}