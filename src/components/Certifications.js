// Certifications.js

import React from 'react';
import './Certifications.css';

const Certifications = () => {
    return (
        <div id="certifications">
            <h2>Certifications & Awards</h2>
            <div className="certification-icons">
                <button className='certi-gomb'>
                    <span className="text" id="asd" >Vegan Diet Certification</span>
                    <span className="shimmer"></span>
                </button>
                <button className='certi-gomb'>
                    <span className="text">Nutrition Specialist</span>
                    <span className="shimmer"></span>
                </button>
                <button className='certi-gomb'>
                    <span className="text">Weight Loss Expert</span>
                    <span className="shimmer"></span>
                </button>
                <button className='certi-gomb'>
                    <span className="text">Certified Fitness Trainer</span>
                    <span className="shimmer"></span>
                </button>
                <button className='certi-gomb'>
                    <span className="text">Holistic Health Award</span>
                    <span className="shimmer"></span>
                </button>
                <button className='certi-gomb'>
                    <span className="text">Best Nutritionist 2023</span>
                    <span className="shimmer"></span>
                </button>
            </div>
        </div>
    );
};

export default Certifications;
