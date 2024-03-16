import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import References from './components/References';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      <Navbar scrollToSection={scrollToSection}/>
      <Home />
      <About />
      <References />
      <Certifications />
      <Contact />
      <Footer scrollToSection={scrollToSection}/>
    </div>
  );
};

export default App;