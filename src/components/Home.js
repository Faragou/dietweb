 //Home.js

import React from 'react';
import './Home.css';
import Kepecske from '../assets/excersice.jpg';

const Home = () => {
    return (
        <div id="home">
            <div className="header">
                <h1>Welcome to WebDiet</h1>
            </div>
            <div className="content">
                <p id='szoveg-balra'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div id='zoldseg'>
                    <img src="https://hips.hearstapps.com/hmg-prod/images/heart-healthy-food-1580231690.jpg?crop=0.668xw:1.00xh;0.0849xw,0&resize=980:*" alt="Vegetables" />
                    <img src={Kepecske} alt="Vegetables" />
                </div>
            </div>
        </div>
    );
};

export default Home;
