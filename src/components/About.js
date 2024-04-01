// About.js

import React from 'react';
import './About.css';
import Stockphoto from '../assets/en.jpg';

const About = () => {
  return (
    <section id="about">
      <h2>About Us</h2>
      <div className="content-container">
      <div className="box-container">

        <div id="szoveg-container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod magna et velit suscipit, vel dictum nisl luctus. Integer nec fermentum sapien. Fusce ullamcorper sapien velit, in faucibus odio condimentum et. Donec eu odio vel justo malesuada tincidunt. Nam nec convallis purus.
          </p>
          </div>
        <div id='Kep-barki'>
          <img src={Stockphoto} alt="Me" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
