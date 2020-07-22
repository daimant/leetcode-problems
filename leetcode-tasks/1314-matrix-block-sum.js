/**
 * @param {number[][]} mat
 * @param {number} K
 * @return {number[][]}
 */
const matrixBlockSum = function(mat, K) {
  const rowLen = mat.length;
  const colLen = mat[0].length;
  const grid = [];

  // walk on all row in mat
  for (let r = 0; r < rowLen; r++) {
    let currVal = 0;

    // walk on all values in each row
    for (let c = 0; c < colLen; c++) {
      // change first element in row
      for (let i = r - K; !c && i <= r + K; i++) {
        for (let j = c - K; j <= c + K; j++) {
          if (mat[i] && mat[i][j]) currVal += mat[i][j];
        }
      }

      // change elements without first
      for (let n = r - K; c && n <= r + K; n++) {
        if (mat[n] && mat[n][c - K - 1]) currVal -= mat[n][c - K - 1];
        if (mat[n] && mat[n][c + K]) currVal += mat[n][c + K];
      }

      // add include arr in result grid
      if (!c && !grid[r]) {
        grid[r] = [];
      }

      // add value in result grid
      grid[r][c] = currVal;
    }
  }

  return grid;
};
