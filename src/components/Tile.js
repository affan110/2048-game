import React from 'react';
import '../styles/Tile.css';

export default function Tile({ value }) {
  const c = value ? `tile tile-${value}` : 'tile empty';
  return (
    <div className={c}>
      {value !== 0 ? value : ''}
    </div>
  );
}