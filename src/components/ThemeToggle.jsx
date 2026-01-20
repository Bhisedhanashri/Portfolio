import React, { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setLightMode();
    } else {
      setDarkMode();
    }
  }, []);

  const setLightMode = () => {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    setIsDark(false);
  };

  const setDarkMode = () => {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    setIsDark(true);
  };

  const toggleTheme = () => (isDark ? setLightMode() : setDarkMode());

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      <span className={`toggle-circle ${isDark ? '' : 'light'}`}></span>
      <span className="icon sun">☀️</span>
      <span className="icon moon">🌙</span>
    </button>
  );
}
