import React, { useEffect, useRef } from 'react';
import './MazeCanvas.css';

const MazeCanvas = ({ maze, position }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const { size, cellSize, walls, start, end } = maze;

    canvas.width = size * cellSize;
    canvas.height = size * cellSize;

    // Clear canvas
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw grid
    ctx.strokeStyle = '#16213e';
    ctx.lineWidth = 1;
    for (let i = 0; i <= size; i++) {
      ctx.beginPath();
      ctx.moveTo(i * cellSize, 0);
      ctx.lineTo(i * cellSize, size * cellSize);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, i * cellSize);
      ctx.lineTo(size * cellSize, i * cellSize);
      ctx.stroke();
    }

    // Draw walls
    ctx.fillStyle = '#0f3460';
    walls.forEach(([x, y]) => {
      ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
    });

    // Draw start
    ctx.fillStyle = '#06d6a0';
    const startPadding = Math.max(2, cellSize * 0.1);
    ctx.fillRect(start.x * cellSize + startPadding, start.y * cellSize + startPadding, cellSize - (startPadding * 2), cellSize - (startPadding * 2));

    // Draw end
    ctx.fillStyle = '#ef476f';
    const endPadding = Math.max(2, cellSize * 0.1);
    ctx.fillRect(end.x * cellSize + endPadding, end.y * cellSize + endPadding, cellSize - (endPadding * 2), cellSize - (endPadding * 2));

    // Draw player - make it bigger and more visible
    ctx.fillStyle = '#ffd60a';
    const playerPadding = Math.max(3, cellSize * 0.15);
    ctx.fillRect(position.x * cellSize + playerPadding, position.y * cellSize + playerPadding, cellSize - (playerPadding * 2), cellSize - (playerPadding * 2));

  }, [maze, position]);

  return (
    <canvas 
      ref={canvasRef}
      className="maze-canvas"
    />
  );
};

export default MazeCanvas;
