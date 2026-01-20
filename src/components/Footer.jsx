// Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>© 2026 Dhanashri Bhise | Full Stack Java Developer</p>
          <div className="footer-socials">
            <a href="https://github.com/your-username" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:bhisedhanashri204@gmail.com">Email</a>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '10px' }}>
            Built with React & Vite
          </p>
        </div>
      </div>
    </footer>
  );
}