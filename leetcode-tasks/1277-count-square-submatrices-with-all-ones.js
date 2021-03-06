/**
 * @param {number[][]} matrix
 * @return {number}
 */
const countSquares = function(matrix) {
  let count = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      const top = i > 0 ? matrix[i - 1][j] : 0,
        left = j > 0 ? matrix[i][j - 1] : 0,
        diag = i > 0 && j > 0 ? matrix[i - 1][j - 1] : 0,
        curr = matrix[i][j] ? matrix[i][j] + Math.min(top, left, diag) : 0;
      matrix[i][j] = curr;
      count += curr;
    }
  }
  return count;
};
