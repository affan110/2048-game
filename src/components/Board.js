import React from 'react';
import Tile from './Tile';
import '../styles/Board.css';
export default function Board({ board }) {
  return (
    <div className="board">
      {board.map((r, i) => (
        <div key={i} className="row">
          {r.map((v, j) => (
            <Tile key={j} value={v} />
          ))}
        </div>
      ))}
    </div>
  );
}