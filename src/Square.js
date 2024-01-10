import React from 'react';
import './Square.css';

const Square = ({ pieces, onClick, type }) => {
  const colorMap = {
    gold: 'yellow',
    food: 'red',
    wood: 'brown',
    none: 'transparent' // Default color for empty tiles
  };

  // Determine the background color based on the resource type
  const squareStyle = {
    backgroundColor: colorMap[type] || 'transparent',
  };

  // Function to render the individual pieces in the square
  const renderPieces = () => {
    return pieces.map((piece, index) => {
      // Assuming each 'piece' object has properties like 'player' and 'pieceType'
      const colorClass = piece.player === 'Player 1' ? 'black' : 'white';
      return <div key={index} className={`piece ${colorClass}`}>{piece.type}</div>;
    });
  };

  return (
    <div className="square" onClick={onClick} style={squareStyle}>
      {renderPieces()}
    </div>
  );
};

export default Square;
