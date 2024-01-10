// GameBoard.js

import React from 'react';
import Square from './Square';
import './GameBoard.css';

const GameBoard = ({ boardElements, onSquareClick, tilesTypes }) => {
  return (
    <div className="board">
      {boardElements.map((tile, index) => (
        <Square
          key={index}
          pieces={tile.pieces}
          resourceType={tile.resourceType}
          onClick={() => onSquareClick(index)}
          type={tilesTypes[index]}
        />
      ))}
    </div>
  );
};


export default GameBoard;
