// Certifications.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import './Certifications.css';

const Certifications = () => {
    return (
        <div id="certifications">
            <h2>Certifications</h2>
            <div className="certification-icons">
                <div className="certification-icon">
                    <FontAwesomeIcon icon={faAward} size="3x" />
                    <p>Nutrition Certification</p>
                </div>
                <div className="certification-icon">
                    <FontAwesomeIcon icon={faAward} size="3x" />
                    <p>Vegetarian Diet Certification</p>
                </div>
                <div className="certification-icon">
                    <FontAwesomeIcon icon={faAward} size="3x" />
                    <p>Pescatarian Diet Certification</p>
                </div>
                <div className="certification-icon">
                    <FontAwesomeIcon icon={faAward} size="3x" />
                    <p>Vegan Diet Certification</p>
                </div>
            </div>
        </div>
    );
};

export default Certifications;
