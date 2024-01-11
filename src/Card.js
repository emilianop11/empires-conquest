import React from 'react';
import './Card.css';

const Card = ({ cardInfo, onClick, setHoverInfo }) => {
  const getInitials = (name) => {
    return name.split(' ').map(word => word[0]).join('');
  };
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
      {getInitials(cardInfo.name)}
    </div>
  );
};

export default Card;
