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
          <li><button onClick={() => scrollToSection('home')}>Home</button></li>
          <li><button onClick={() => scrollToSection('about')}>About</button></li>
          <li><button onClick={() => scrollToSection('references')}>References</button></li>
          <li><button onClick={() => scrollToSection('certifications')}>Certifications</button></li>
          <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
