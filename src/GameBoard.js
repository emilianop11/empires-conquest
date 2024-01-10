import React from 'react';
import Square from './Square';
import './GameBoard.css';

const GameBoard = ({ boardElements, tilesTypes, onSquareClick }) => {
  return (
    <div className="board">
      {tilesTypes.map((type, index) => (
        <Square key={index} resourceType={boardElements[index]} type={type} onClick={() => onSquareClick(index)} />
      ))}
    </div>
  );
};

export default GameBoard;
