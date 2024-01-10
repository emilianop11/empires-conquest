import React, { useState, useEffect } from 'react';
import GameBoard from './GameBoard';
import Sidebar from './Sidebar';
import Card from './Card';
import './App.css';
import ContextBox from './ContextBox';
import { cards } from './CardData';

const App = () => {
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerOneResources, setPlayerOneResources] = useState({ gold: 0, food: 0, wood: 0 });
  const [playerTwoResources, setPlayerTwoResources] = useState({ gold: 0, food: 0, wood: 0 });
  const [selectedElement, setSelectedElement] = useState(null);
  const [boardElements, setBoardElements] = useState(Array(64).fill().map(() => ({
    pieces: [], // Each tile starts with an empty array of pieces
    resourceType: 'none' // Default resource type
  })));
  const [tilesTypes, setTilesTypes] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState('Player 1');
  const [selectedPieceIndex, setSelectedPieceIndex] = useState(null);
  const [hoverInfo, setHoverInfo] = useState('');

  const handleCardClick = (cardId, player) => {
    // Filter out the clicked card by its unique ID
    if (player === 'Player One') {
      setPlayerOneHand(prevHand => prevHand.filter(card => card.id !== cardId));
    } else {
      setPlayerTwoHand(prevHand => prevHand.filter(card => card.id !== cardId));
    }
  };

  const handleElementClick = (element) => {
    setSelectedElement({ type: element, player: currentPlayer });
    setSelectedPieceIndex(null);
  };

  const handleSquareClick = (index) => {
    if (selectedElement) {
      placeElement(index);
    } else {
      selectOrMovePiece(index);
    }
  };

  const placeElement = (index) => {
    const newBoardElements = [...boardElements];
    newBoardElements[index].pieces.push(selectedElement); // Append the new element
    setBoardElements(newBoardElements);
    setSelectedElement(null);
    setSelectedPieceIndex(null);
  };
  

  const selectOrMovePiece = (index) => {
    // Check if we have a piece selected for moving
    if (selectedPieceIndex !== null) {
      // Move the piece if the selected square is different from the target square
      if (selectedPieceIndex !== index) {
        movePiece(index);
      }
      // Deselect the piece if the same square is clicked again
      setSelectedPieceIndex(null);
    } else {
      // Select the piece if the square is not empty
      if (boardElements[index]) {
        setSelectedPieceIndex(index);
      }
    }
  };

  const removePiece = (index, piece) => {
    const newBoardElements = [...boardElements];
    
    // Remove the specified piece from the tile at the given index
    newBoardElements[index].pieces = newBoardElements[index].pieces.filter(p => p !== piece);

    setBoardElements(newBoardElements);
  };

  const movePiece = (newIndex) => {
    const newBoardElements = [...boardElements];
    const piece = newBoardElements[selectedPieceIndex];
    newBoardElements[selectedPieceIndex] = newBoardElements[selectedPieceIndex].replace(piece, '');
    newBoardElements[newIndex] += piece;
    setBoardElements(newBoardElements);
    setSelectedPieceIndex(null);
    setSelectedElement(null);
  };

  const togglePlayer = () => {
    setCurrentPlayer(currentPlayer === 'Player 1' ? 'Player 2' : 'Player 1');
    setSelectedElement(null);
    setSelectedPieceIndex(null);
  };

  useEffect(() => {
    // Function to randomly pick cards
    // Function to generate a unique ID - simple version
    const generateId = () => Math.random().toString(36).substr(2, 9);

    // Function to randomly pick cards and assign a unique ID to each
    const pickRandomCards = (num) => {
      return Array.from({ length: num }, () => {
        const card = cards[Math.floor(Math.random() * cards.length)];
        return { ...card, id: generateId() };
      });
    };

    // Distribute 7 cards to each player
    setPlayerOneHand(pickRandomCards(20));
    setPlayerTwoHand(pickRandomCards(20));

    const initializeTilesTypes = () => {
      return Array(64).fill().map(() => {
        const randomNum = Math.random();
        if (randomNum < 0.05) return 'gold';
        if (randomNum < 0.15) return 'food';
        if (randomNum < 0.35) return 'wood';
        return 'none';
      });
    };

    setTilesTypes(initializeTilesTypes());
  }, []);

  return (
    <div className="app">
      <div className="player-cards top">
        {playerOneHand.map(card => (
          <Card key={card.id} cardInfo={card} onClick={() => handleCardClick(card.id, 'Player One')} setHoverInfo={setHoverInfo}/>
        ))}
      </div>

      <div className="turn-indicator" onClick={togglePlayer}>
        Turn: {currentPlayer}
      </div>

      <div className="game-layout">
        <GameBoard boardElements={boardElements} tilesTypes={tilesTypes} onSquareClick={handleSquareClick} onPieceDoubleClick={removePiece}/>
        <Sidebar onElementClick={handleElementClick} setHoverInfo={setHoverInfo} />
        <ContextBox info={hoverInfo} />
      </div>

      {selectedElement && (
        <div className="selected-element">Selected: {JSON.stringify(selectedElement)}</div>
      )}

      <div className="player-cards bottom">
        {playerTwoHand.map(card => (
          <Card key={card.id} cardInfo={card} onClick={() => handleCardClick(card.id, 'Player Two')} setHoverInfo={setHoverInfo}/>
        ))}
      </div>
      <div className="resources-box">
        <div className="player-resources">
          <h3>P1</h3>
          <div>
            <label>G: <input type="number" value={playerOneResources.gold} onChange={e => setPlayerOneResources({...playerOneResources, gold: e.target.value})} /></label>
            <label>F: <input type="number" value={playerOneResources.food} onChange={e => setPlayerOneResources({...playerOneResources, food: e.target.value})} /></label>
            <label>W: <input type="number" value={playerOneResources.wood} onChange={e => setPlayerOneResources({...playerOneResources, wood: e.target.value})} /></label>
          </div>
        </div>
        <div className="player-resources">
          <h3>P2</h3>
          <div>
            <label>G: <input type="number" value={playerTwoResources.gold} onChange={e => setPlayerTwoResources({...playerTwoResources, gold: e.target.value})} /></label>
            <label>F: <input type="number" value={playerTwoResources.food} onChange={e => setPlayerTwoResources({...playerTwoResources, food: e.target.value})} /></label>
            <label>W: <input type="number" value={playerTwoResources.wood} onChange={e => setPlayerTwoResources({...playerTwoResources, wood: e.target.value})} /></label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
