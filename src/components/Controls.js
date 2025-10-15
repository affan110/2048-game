import React from 'react';
import '../styles/Controls.css';

const Controls = ({ onMove }) => {
  return (
    <div className="controls-container">
      <div className="row">
        <button className="ctrl-btn" onClick={() => onMove('up')}>↑</button>
      </div>
      <div className="row">
        <button className="ctrl-btn" onClick={() => onMove('left')}>←</button>
        <button className="ctrl-btn" onClick={() => onMove('down')}>↓</button>
        <button className="ctrl-btn" onClick={() => onMove('right')}>→</button>
      </div>
    </div>
  );
};

export default Controls;
