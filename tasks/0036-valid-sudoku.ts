// Accepted 507 / 507 testcases passed Sergey Pomortsev submitted at Apr 04, 2026 00:04
// uytrSolution Runtime 3 ms Beats 87.98% Memory 58.19 MB Beats 88.97%

function isValidSudoku(board: string[][]): boolean {
  return checkY(board) && checkX(board) && checkSquares(board);
};

function checkSquares(board: string[][]) {
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      const set = new Set<string>();

      for (let m = 0; m < 3; m++) {
        for (let n = 0; n < 3; n++) {
          if (board[i + m][j + n] !== '.' && set.has(board[i + m][j + n])) return false;
          else set.add(board[i + m][j + n]);
        }
      }
    }
  }
  return true;
};

function checkY(board: string[][]) {
  for (let j = 0; j < 9; j++) {
    const set = new Set<string>();

    for (let i = 0; i < 9; i++) {
      if (board[i][j] !== '.' && set.has(board[i][j])) return false;
      else set.add(board[i][j])
    }
  }

  return true;
};

function checkX(board: string[][]) {
  for (let i = 0; i < 9; i++) {
    const set = new Set<string>();

    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== '.' && set.has(board[i][j])) return false;
      else set.add(board[i][j])
    }
  }

  return true;
};

// optimize
// Accepted 507 / 507 testcases passed Sergey Pomortsev submitted at Apr 04, 2026 00:07
// Solution Runtime 1 ms Beats 99.11% Memory 58.48 MB Beats 82.27%

function isValidSudoku(board: string[][]): boolean {
  return checkXY(board) && checkSquares(board);
};

function checkSquares(board: string[][]) {
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      const set = new Set<string>();

      for (let m = 0; m < 3; m++) {
        for (let n = 0; n < 3; n++) {
          if (board[i + m][j + n] !== '.' && set.has(board[i + m][j + n])) return false;
          else set.add(board[i + m][j + n]);
        }
      }
    }
  }
  return true;
};

function checkXY(board: string[][]) {
  for (let j = 0; j < 9; j++) {
    const setX = new Set<string>();
    const setY = new Set<string>();

    for (let i = 0; i < 9; i++) {
      if (board[i][j] !== '.' && setX.has(board[i][j])) return false;
      else setX.add(board[i][j]);

      if (board[j][i] !== '.' && setY.has(board[j][i])) return false;
      else setY.add(board[j][i])
    }
  }

  return true;
};