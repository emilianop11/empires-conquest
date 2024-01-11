import React from 'react';
import './Sidebar.css';



  
const Sidebar = ({ onElementClick, setHoverInfo }) => {
    const pieces = [
        { initial: 'P', name: 'Pawn', description: 'Basic infantry unit.', attack: 1, defense: 1, range: 1, image: "pawn.png" },
        { initial: 'K', name: 'King', description: 'The most important unit.', attack: 3, defense: 5, range: 1, image: "king.png" },
        { initial: 'H', name: 'Horseman', description: 'Fast and agile.', attack: 3, defense: 2, range: 1, image: "horseman.png" },
        { initial: 'A', name: 'Archer', description: 'Ranged unit.', attack: 2, defense: 1, range: 2, image: "archer.png" },
        { initial: 'W', name: 'Worker', description: 'Collects resources.', attack: 0, defense: 1, image: "worker.png" },
        { initial: 'AR', name: 'Archery', description: 'Allows spawning Archers', attack: 0, defense: 1, image: "archery.png" },
        { initial: 'CA', name: 'Cavalry', description: 'Allows spawning Horsemen.', attack: 0, defense: 1,  image: "cavalry.png" },
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
                defense: piece.defense,
                range: piece.range,
                image: piece.image
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
