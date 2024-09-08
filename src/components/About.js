// About.js

import React from 'react';
import './About.css';
import Stockphoto from '../assets/en.jpg';
import TeamPhoto from '../assets/istockphoto-1346125184-612x612.jpg'; // Example team photo

const About = () => {
  return (
    <section id="about">
      <h2>About Us</h2>
      
      {/* Mission section */}
      <div className="mission-section">
        <h3>Our Mission</h3>
        <p>
          Our mission is to provide personalized nutrition and fitness guidance to help you live your healthiest life. We believe in a holistic approach that promotes sustainable habits and long-term success.
        </p>
      </div>

      <div className="content-container">
        <div className="box-container">
          <div id="szoveg-container">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod magna et velit suscipit, vel dictum nisl luctus. Integer nec fermentum sapien. Fusce ullamcorper sapien velit, in faucibus odio condimentum et. Donec eu odio vel justo malesuada tincidunt. Nam nec convallis purus.
            </p>
          </div>
          <div id='Kep-barki'>
            <img src={Stockphoto} alt="Our Journey" />
          </div>
        </div>
      </div>


      {/* Meet the Team Section */}
      <div className="team-section">
        <h3>Meet the Team</h3>
        <div className="team-photo-container">
          <img src={TeamPhoto} alt="Our Team" />
        </div>
        <p>Our experienced team of nutritionists and fitness experts are here to guide you every step of the way.</p>
      </div>
    </section>
  );
};

export default About;
