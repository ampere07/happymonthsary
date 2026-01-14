import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import MazeCanvas from './components/MazeCanvas';
import Modal from './components/Modal';
import JumpScare from './components/JumpScare';
import Controls from './components/Controls';

function App() {
  const [level, setLevel] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showModal, setShowModal] = useState(false);
  const [showJumpScare, setShowJumpScare] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Maze configurations for each level
  const getMazeConfig = () => {
    // Adjust cell sizes for mobile
    const mobileCellSizes = isMobile ? { 1: 30, 2: 25, 3: 20 } : { 1: 50, 2: 40, 3: 30 };
    
    return {
      1: {
        size: 10,
        cellSize: isMobile ? 30 : 50,
        walls: [
          [0,1], [0,2], [0,3], [0,4], [0,5], [0,6], [0,7],
          [1,3], [1,7],
          [2,1], [2,3], [2,5], [2,7],
          [3,1], [3,5], [3,7],
          [4,1], [4,3], [4,4], [4,5], [4,7],
          [5,7],
          [6,1], [6,3], [6,5], [6,7],
          [7,1], [7,3], [7,5],
          [8,1], [8,3], [8,5], [8,7], [8,8],
        ],
        start: { x: 0, y: 0 },
        end: { x: 9, y: 9 }
      },
    2: {
      size: 15,
      cellSize: isMobile ? 25 : 40,
      walls: [
        [0,1], [0,2], [0,3], [0,4], [0,5], [0,6], [0,7], [0,8], [0,9], [0,10],
        [1,3], [1,5], [1,7], [1,10], [1,12],
        [2,1], [2,3], [2,5], [2,7], [2,9], [2,10], [2,12],
        [3,1], [3,5], [3,7], [3,9], [3,12],
        [4,1], [4,3], [4,5], [4,7], [4,9], [4,11], [4,12],
        [5,3], [5,9], [5,11],
        [6,1], [6,3], [6,5], [6,7], [6,9], [6,11], [6,13],
        [7,1], [7,5], [7,7], [7,11], [7,13],
        [8,1], [8,3], [8,5], [8,7], [8,9], [8,11], [8,13],
        [9,3], [9,9], [9,11],
        [10,1], [10,3], [10,5], [10,7], [10,9], [10,11], [10,13],
        [11,1], [11,5], [11,7], [11,9], [11,13],
        [12,1], [12,3], [12,5], [12,7], [12,9], [12,11], [12,13],
        [13,3], [13,5], [13,7], [13,9], [13,11],
      ],
      start: { x: 0, y: 0 },
      end: { x: 14, y: 14 }
    },
    3: {
      size: 20,
      cellSize: isMobile ? 20 : 30,
      walls: [
        [0,1], [0,2], [0,3], [0,4], [0,5], [0,6], [0,7], [0,8], [0,9], [0,10], [0,11], [0,12], [0,13],
        [1,3], [1,5], [1,7], [1,9], [1,11], [1,13], [1,15],
        [2,1], [2,3], [2,5], [2,7], [2,9], [2,11], [2,13], [2,15], [2,17],
        [3,1], [3,5], [3,7], [3,9], [3,11], [3,13], [3,15], [3,17],
        [4,1], [4,3], [4,5], [4,7], [4,9], [4,11], [4,13], [4,15], [4,17],
        [5,3], [5,7], [5,9], [5,11], [5,15], [5,17],
        [6,1], [6,3], [6,5], [6,7], [6,9], [6,11], [6,13], [6,15], [6,17], [6,18],
        [7,1], [7,5], [7,7], [7,11], [7,13], [7,15], [7,18],
        [8,1], [8,3], [8,5], [8,7], [8,9], [8,11], [8,13], [8,15], [8,18],
        [9,3], [9,9], [9,11], [9,13], [9,18],
        [10,1], [10,3], [10,5], [10,7], [10,9], [10,11], [10,13], [10,15], [10,17], [10,18],
        [11,1], [11,5], [11,7], [11,9], [11,13], [11,15], [11,17],
        [12,1], [12,3], [12,5], [12,7], [12,9], [12,11], [12,13], [12,15], [12,17],
        [13,3], [13,5], [13,9], [13,11], [13,15], [13,17],
        [14,1], [14,3], [14,5], [14,7], [14,9], [14,11], [14,13], [14,15], [14,17],
        [15,1], [15,7], [15,9], [15,11], [15,13], [15,17],
        [16,1], [16,3], [16,5], [16,7], [16,9], [16,11], [16,13], [16,15], [16,17],
        [17,3], [17,5], [17,7], [17,11], [17,13], [17,15],
        [18,1], [18,3], [18,5], [18,7], [18,9], [18,11], [18,13], [18,15], [18,17],
      ],
      start: { x: 0, y: 0 },
      end: { x: 19, y: 19 }
    }
    };
  };

  const currentMaze = getMazeConfig()[level];

  // Reset position when level changes
  useEffect(() => {
    setPosition(currentMaze.start);
  }, [level]);

  // Handle keyboard input
  const movePlayer = (direction) => {
    if (showModal || showJumpScare) return;

    let newX = position.x;
    let newY = position.y;

    if (direction === 'w') newY = Math.max(0, position.y - 1);
    if (direction === 's') newY = Math.min(currentMaze.size - 1, position.y + 1);
    if (direction === 'a') newX = Math.max(0, position.x - 1);
    if (direction === 'd') newX = Math.min(currentMaze.size - 1, position.x + 1);

    // Check if new position is a wall
    const isWall = currentMaze.walls.some(([wx, wy]) => wx === newX && wy === newY);
    
    if (!isWall) {
      setPosition({ x: newX, y: newY });

      // Check if reached the end
      if (newX === currentMaze.end.x && newY === currentMaze.end.y) {
        if (level < 3) {
          setTimeout(() => {
            setLevel(level + 1);
          }, 300);
        } else {
          setShowModal(true);
        }
      }
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      const key = e.key.toLowerCase();
      if (['w', 'a', 's', 'd'].includes(key)) {
        movePlayer(key);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [position, level, showModal, showJumpScare, currentMaze]);

  const handleNextPage = () => {
    setShowModal(false);
    setShowJumpScare(true);
  };

  return (
    <div className="App">
      <div className="game-container">
        <div className="game-header">
          <h1>Level {level} of 3</h1>
          <p>{isMobile ? 'Use arrow buttons to move' : 'Use W, A, S, D to move'}</p>
        </div>
        <MazeCanvas 
          maze={currentMaze} 
          position={position} 
        />
      </div>
      
      {isMobile && <Controls onMove={movePlayer} />}
      
      {showModal && <Modal onNextPage={handleNextPage} />}
      {showJumpScare && <JumpScare />}
    </div>
  );
}

export default App;
