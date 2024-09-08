import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome icons

const Navbar = ({ scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" />
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i> {/* Toggle icon */}
      </div>
      <div className={`navbar-right ${menuOpen ? 'open' : ''}`}>
        <button onClick={() => { scrollToSection('home'); setMenuOpen(false); }}>Home</button>
        <button onClick={() => { scrollToSection('about'); setMenuOpen(false); }}>About</button>
        <button onClick={() => { scrollToSection('services'); setMenuOpen(false); }}>Services</button>
        <button onClick={() => { scrollToSection('references'); setMenuOpen(false); }}>References</button>
        <button onClick={() => { scrollToSection('certifications'); setMenuOpen(false); }}>Certifications</button>
        <button onClick={() => { scrollToSection('contact'); setMenuOpen(false); }}>Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;
