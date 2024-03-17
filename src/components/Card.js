import React from 'react';
import './Card.css';

const Card = ({imageUrl, comment}) => (
  <div className='card'>
    <img src={imageUrl} alt="Smiling Person" />
    <p>{comment}</p>
  </div>
);

export default Card;
