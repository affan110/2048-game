import React, { useEffect, useState } from 'react';
import Board from './components/Board';
import Controls from './components/Controls';
import { createEmptyBoard, addRandomTile, moveBoard, isGameOver, hasWon } from './utils/gameLogic';
import './App.css';

const BOARD_SIZE = 4;

function App() {
  const [board, setBoard] = useState(createEmptyBoard(BOARD_SIZE));
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(
    parseInt(localStorage.getItem('bestScore')) || 0
  );
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);

  const initialize = () => {
    let newBoard = createEmptyBoard(BOARD_SIZE);
    newBoard = addRandomTile(addRandomTile(newBoard));
    setBoard(newBoard);
    setScore(0);
    setGameOver(false);
    setWon(false);
  };

  useEffect(() => {
    initialize();
  }, []);

  const handleMove = (dir) => {
    if (gameOver || won) return;
    const { newBoard, score: gained, moved } = moveBoard(board, dir);
    if (!moved) return;
    const updated = addRandomTile(newBoard);
    setBoard(updated);
    const newScore = score + gained;
    setScore(newScore);

    if (newScore > bestScore) {
      setBestScore(newScore);
      localStorage.setItem('bestScore', newScore);
    }

    if (hasWon(updated)) setWon(true);
    if (isGameOver(updated)) setGameOver(true);
  };

  const handleKeyDown = (e) => {
    const map = { ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right' };
    if (map[e.key]) handleMove(map[e.key]);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <div className="app">
      <div className="top-bar">
        <h1 className="game-title">2048</h1>
        <div className="stats">
          <div className="score-card">
            <p className="label">SCORE</p>
            <h3 className="value">{score}</h3>
          </div>
          <div className="score-card">
            <p className="label">BEST</p>
            <h3 className="value">{bestScore}</h3>
          </div>
          <button className="new-game-btn" onClick={initialize}>New Game</button>
        </div>
      </div>

      <Board board={board} />
      <Controls onMove={handleMove} />

      {won && <div className="overlay win">🎉 You reached 2048!</div>}
      {gameOver && <div className="overlay lose">Game Over! No moves left.</div>}
    </div>
  );
}

export default App;
