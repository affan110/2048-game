# 🎮 2048 Game Implementation

##  Objective
A functional implementation of the classic **2048 Game** using **React.js**.  
The goal is to slide and merge numbered tiles to reach **2048**, with an interactive and responsive GUI.

---

## 🚀 Live Demo
🔗 **https://affan110.github.io/2048-game**

---

##  Features
- 4×4 dynamic grid board
- Keyboard (↑ ↓ ← →) and on-screen controls
- Score & Best Score tracking (persistent via localStorage)
- Win (2048) and Game Over detection
- “New Game” restart option
- Responsive, modern UI design
- Implemented with functional programming principles

---

##  Tech Stack
**React.js**, **JavaScript (ES6)**, **CSS3**, **npm**, **GitHub Pages**

---

## ⚙️ Installation & Running Locally
```bash
git clone https://github.com/affan110/2048-game.git
cd 2048-game
npm install
npm start
````

Runs on **[http://localhost:3000](http://localhost:3000)**

---

## 🌐 Deployment (GitHub Pages)

```bash
npm run build
npm run deploy
```

Deployed app: **[https://affan110.github.io/2048-game](https://affan110.github.io/2048-game)**

---

##  Game Logic Overview

Core logic in `src/utils/gameLogic.js`:

* `createEmptyBoard(size)` → Initialize empty board
* `addRandomTile(board)` → Adds random 2 or 4
* `moveBoard(board, dir)` → Handles movement & merging
* `isGameOver(board)` → Detects no moves left
* `hasWon(board)` → Checks for 2048 tile

---

## Folder Structure

```
src/
 ├── components/ (Board, Tile, Controls)
 ├── styles/ (Board.css, Tile.css, Controls.css)
 ├── utils/ (gameLogic.js)
 ├── App.js / App.css
 └── index.js
```

---

## 🧾 Deliverables

| Deliverable        | Status                                                                           |
| ------------------ | -------------------------------------------------------------------------------- |
| Public GitHub Repo | ✅ [https://github.com/affan110/2048-game](https://github.com/affan110/2048-game) |
| Graphical UI       | ✅ React.js Frontend                                                              |
| Deployed App       | ✅ [https://affan110.github.io/2048-game](https://affan110.github.io/2048-game)   |
| README             | ✅ Installation + Usage details                                                   |

---

## Author

**Abu Affan**
M.Tech, Computer Science & Engineering — NIT Rourkela
📧 [abaffan.111@gmail.com](mailto:abaffan.111@gmail.com)
