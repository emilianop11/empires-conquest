import React from 'react';
import './Square.css';

const Square = ({ pieces, onClick, type, onPieceDoubleClick }) => {
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
      return (
        <div key={index} 
             className={`piece ${piece.player === 'Player 1' ? 'black' : 'white'}`} 
             onClick={(e) => {
               e.stopPropagation(); // Prevent triggering square's onClick
               onClick && onClick(piece);
             }}
             onDoubleClick={(e) => {
               e.stopPropagation(); // Prevent triggering square's onClick
               onPieceDoubleClick && onPieceDoubleClick(piece);
             }}>
          {piece.type}
        </div>
      );
    });
  };

  return (
    <div className="square" onClick={onClick} style={squareStyle}>
      {renderPieces()}
    </div>
  );
};

export default Square;
