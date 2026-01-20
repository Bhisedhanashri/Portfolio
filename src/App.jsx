import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* HERO + ABOUT (LEFT - RIGHT) */}
      <section id="home" className="hero-about-section">
        <div className="container hero-about-grid">
          <Hero />
          <About />
        </div>
      </section>
      <Skills/>
      {/* EDUCATION */}
      <Education />

      {/* PROJECTS */}
      <Projects />

      {/* CERTIFICATIONS */}
      <Certifications />

      {/* CONTACT */}
      <Contact />

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          padding: "40px",
          color: "#64748b",
          fontSize: "0.8rem",
        }}
      >
        © 2026 Dhanashri Bhise. Built with React & Full Stack Java expertise.
      </footer>
    </div>
  );
}

export default App;
