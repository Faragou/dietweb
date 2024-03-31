// Footer.js

import React from 'react';
import './Footer.css';

const Footer = ({ scrollToSection }) => {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; WebDiet
            
        </p>
        <ul className="footer-links">
          <button onClick={() => scrollToSection('home')}>Home</button>
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('references')}>References</button>
          <button onClick={() => scrollToSection('certifications')}>Certifications</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
