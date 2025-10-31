/**
 * @param {number[][]} mat
 * @return {number}
 */
const diagonalSum = function(mat) {
  let sum = 0;
  let len = mat.length;

  for (let i = 0; i < len; i++) {
    sum += mat[i][i];
    if (len - 1 - i !== i) sum += mat[i][len - 1 - i];
  }

  return sum;
};
