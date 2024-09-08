import React from 'react';
import './Home.css';
import BackgroundVideo from '../assets/3195650-uhd_3840_2160_25fps.mp4'; // Add video here

const Home = ({ scrollToSection }) => {
    return (
        <div id="home">
            {/* Background Video */}
            <video autoPlay muted loop id="background-video">
                <source src={BackgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="overlay">
                <div className="header">
                    <h1>Welcome to WebDiet</h1>
                </div>
                <div className="content">
                    <p id='szoveg-balra'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    {/*<div id='zoldseg'> 
                        <img src="https://hips.hearstapps.com/hmg-prod/images/heart-healthy-food-1580231690.jpg?crop=0.668xw:1.00xh;0.0849xw,0&resize=980:*" alt="Vegetables" />
                        <img src={Kepecske} alt="Exercise" />
                    </div>*/}
                    
                </div>

                {/* Additional Call to Action */}
                <div className="cta">
                    <h2>Your Journey to Health Starts Here</h2>
                    <button className="cta-button" onClick={() => scrollToSection('services')}>
                    Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
