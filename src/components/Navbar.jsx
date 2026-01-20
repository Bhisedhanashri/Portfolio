import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  // Effect to apply the theme to the document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="navbar">
      <div className="nav-brand " style={{fontSize: '2rem'}}>DHANASHRI BHISE</div>
      
      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#Projects" onClick={() => setIsOpen(false)}>Projects</a>
        <a href="#Education" onClick={() => setIsOpen(false)}>Education</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        <a href="/dhanashri.pdf" download className="btn-resume">Download CV</a>
        
        {/* Theme Toggle Button */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span><span></span><span></span>
      </div>
    </nav>
  );
}