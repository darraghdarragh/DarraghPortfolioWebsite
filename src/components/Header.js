import React, { useState } from 'react';
import './Header.css';

function Header({ darkMode, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${darkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <h1 className="logo">My Portfolio</h1>
        <nav>
          <div className="hamburger" onClick={toggleMenu}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About Me</a></li>
            <li><a href="#project" onClick={() => setMenuOpen(false)}>My Projects</a></li>
            <li><a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a></li>
            <li><a href="#blog" onClick={() => setMenuOpen(false)}>Blog</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
          <button className="btn dark-mode-toggle" onClick={toggleDarkMode}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
