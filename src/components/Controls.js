import React from 'react';
import './Controls.css';

const Controls = ({ onMove }) => {
  return (
    <div className="controls-container">
      <div className="controls-grid">
        <div className="controls-row">
          <button 
            className="control-button"
            onClick={() => onMove('w')}
            aria-label="Move Up"
          >
            ▲
          </button>
        </div>
        <div className="controls-row">
          <button 
            className="control-button"
            onClick={() => onMove('a')}
            aria-label="Move Left"
          >
            ◀
          </button>
          <button 
            className="control-button"
            onClick={() => onMove('s')}
            aria-label="Move Down"
          >
            ▼
          </button>
          <button 
            className="control-button"
            onClick={() => onMove('d')}
            aria-label="Move Right"
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default Controls;
