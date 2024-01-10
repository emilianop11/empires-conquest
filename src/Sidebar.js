import React from 'react';
import './Sidebar.css';



  
const Sidebar = ({ onElementClick, setHoverInfo }) => {
    const pieces = [
        { initial: 'P', name: 'Pawn', description: 'Basic infantry unit.', attack: 1, defense: 1 },
        { initial: 'K', name: 'King', description: 'The most important unit.', attack: 3, defense: 5 },
        { initial: 'C', name: 'Cavalry', description: 'Fast and agile.', attack: 3, defense: 2 },
        { initial: 'A', name: 'Archer', description: 'Ranged unit.', attack: 2, defense: 1 },
        { initial: 'W', name: 'Wizard', description: 'Uses magical powers.', attack: 4, defense: 1 }
    ];

  return (
    <div className="sidebar">
      {pieces.map(piece => (
        <button key={piece.initial} 
            onClick={() => onElementClick(piece.initial)}
            onMouseEnter={() => setHoverInfo({
                name: piece.name,
                description: piece.description,
                attack: piece.attack,
                defense: piece.defense
                // Image and cost can be added when available
              })}
            onMouseLeave={() => setHoverInfo('')}
        >
          {piece.initial}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
