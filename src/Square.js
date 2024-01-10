import React from 'react';
import './Square.css';

const Square = ({ resourceType, onClick, type }) => {
  const colorMap = {
    gold: 'yellow',
    food: 'red',
    wood: 'brown',
    none: 'transparent' // Default color for empty tiles
  };

  // Determine if the resourceType is a resource type or a game piece
  const isResourceType = ['gold', 'food', 'wood', 'none'].includes(resourceType);
  
  const squareStyle = {
    backgroundColor: isResourceType ? colorMap[resourceType] : 'transparent',
  };

  const renderPieces = () => {
    if (isResourceType) return null; // Don't render pieces for resource types

    return resourceType.match(/.{2}/g)?.map((element, index) => {
      const player = element.charAt(0); // 'P' or 'K'
      const pieceType = element.charAt(1); // Type of piece
      const colorClass = player === 'P' ? 'black' : 'white';
      return <div key={index} className={`piece ${colorClass}`}>{pieceType}</div>;
    }) || [];
  };

  return (
    <div className={`square ${type}`} onClick={onClick} style={squareStyle}>
      {renderPieces()}
    </div>
  );
};

export default Square;
