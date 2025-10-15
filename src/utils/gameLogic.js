// Create an empty board of given size
export const createEmptyBoard = (size) =>
  Array.from({ length: size }, () => Array(size).fill(0));

// Deep copy helper to avoid mutating state directly
const copyBoard = (board) => board.map((row) => [...row]);

// Add a random tile (2 or 4) in an empty position
export const addRandomTile = (board) => {
  const newBoard = copyBoard(board);
  const emptyCells = [];

  for (let i = 0; i < newBoard.length; i++) {
    for (let j = 0; j < newBoard.length; j++) {
      if (newBoard[i][j] === 0) emptyCells.push([i, j]);
    }
  }

  if (emptyCells.length === 0) return newBoard;

  const [x, y] = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  newBoard[x][y] = Math.random() < 0.9 ? 2 : 4;
  return newBoard;
};

// Rotate matrix clockwise
const rotate = (matrix) => {
  const N = matrix.length;
  const rotated = createEmptyBoard(N);
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      rotated[j][N - 1 - i] = matrix[i][j];
    }
  }
  return rotated;
};

// Slide a single row left, merge if needed
const slideRowLeft = (row) => {
  const nonZero = row.filter((v) => v !== 0);
  let score = 0;

  for (let i = 0; i < nonZero.length - 1; i++) {
    if (nonZero[i] === nonZero[i + 1]) {
      nonZero[i] *= 2;
      score += nonZero[i];
      nonZero[i + 1] = 0;
    }
  }

  const newRow = nonZero.filter((v) => v !== 0);
  while (newRow.length < row.length) newRow.push(0);
  const moved = newRow.some((v, idx) => v !== row[idx]);

  return { newRow, score, moved };
};

// Slide the entire board left (core merge logic)
const slideLeft = (board) => {
  const N = board.length;
  let totalScore = 0;
  let moved = false;
  const newBoard = createEmptyBoard(N);

  for (let i = 0; i < N; i++) {
    const { newRow, score, moved: rowMoved } = slideRowLeft(board[i]);
    newBoard[i] = newRow;
    totalScore += score;
    if (rowMoved) moved = true;
  }

  return { newBoard, totalScore, moved };
};

// Move board in any direction using rotation trick
export const moveBoard = (board, direction) => {
  let rotated = copyBoard(board);
  let rotations = 0;

  if (direction === 'up') rotations = 1;
  else if (direction === 'right') rotations = 2;
  else if (direction === 'down') rotations = 3;

  for (let i = 0; i < rotations; i++) rotated = rotate(rotated);

  const { newBoard, totalScore, moved } = slideLeft(rotated);

  let resultBoard = newBoard;
  for (let i = 0; i < (4 - rotations) % 4; i++) resultBoard = rotate(resultBoard);

  return { newBoard: resultBoard, score: totalScore, moved };
};

// Check if game is over (no empty cells or possible merges)
export const isGameOver = (board) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 0) return false;
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length - 1; j++) {
      if (
        board[i][j] === board[i][j + 1] ||
        board[j][i] === board[j + 1][i]
      )
        return false;
    }
  }

  return true;
};

// Check if 2048 tile exists
export const hasWon = (board) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 2048) return true;
    }
  }
  return false;
};
