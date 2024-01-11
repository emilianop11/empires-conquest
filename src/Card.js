import React from 'react';
import './Card.css';

const Card = ({ cardInfo, onClick, setHoverInfo }) => {
  return (
    <div className="card" 
      onClick={onClick}
      onMouseEnter={() => setHoverInfo({
        name: cardInfo.name,
        description: cardInfo.description,
        cost: JSON.stringify(cardInfo.cost),
        image: cardInfo.image
        // Image and cost can be added when available
      })}
    onMouseLeave={() => setHoverInfo('')}
    >
      {cardInfo.name.length}
    </div>
  );
};

export default Card;
