// components/Navbar.js

import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.jpg';

const Navbar = ({ scrollToSection }) => {
  return (
    <nav className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="Logo" />
            </div>
            <div className="navbar-right">
                <button onClick={() => scrollToSection('home')}>Home</button>
                <button onClick={() => scrollToSection('about')}>About</button>
                <button onClick={() => scrollToSection('services')}>Services</button>
                <button onClick={() => scrollToSection('references')}>References</button>
                <button onClick={() => scrollToSection('certifications')}>Certifications</button>
                <button onClick={() => scrollToSection('contact')}>Contact</button>
            </div>
        </nav>
    );
};

export default Navbar;
