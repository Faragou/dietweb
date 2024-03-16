// ReferenceBox.js

import React from 'react';
import './ReferenceBox.css';

const ReferenceBox = ({ imageUrl, comment }) => {
    return (
        <div className="reference-box">
            <img src={imageUrl} alt="Smiling Person" />
            <p>{comment}</p>
        </div>
    );
};

export default ReferenceBox;
