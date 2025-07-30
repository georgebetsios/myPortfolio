import React from 'react';
import { useState, useEffect } from 'react';

import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY + window.innerHeight / 3;

        let current = 'home';

        sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            current = section.id;
          }
        });

        setActiveSection(current);
      }, 5); 
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);


  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <div className="navbar-logo">
            <i className="fas fa-code icon"></i>
            <span className="logo-text">George Betsios</span>
          </div>

          <button
            className={`navbar-toggle ${isOpen ? 'open' : ''}`}
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            <span className="burger"></span>
            <span className="burger"></span>
            <span className="burger"></span>
          </button>
        </div>

        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>Home</a>
          <a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>About</a>
          <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>Contact</a>
        </div>

      </nav>
      {isOpen && <div className="menu-overlay" onClick={() => setIsOpen(false)}></div>}
    </>
  );
};

export default Navbar;


