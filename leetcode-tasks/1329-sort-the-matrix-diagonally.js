/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
  const takeEl = (i, j, k, arr) => {
    arr[i].push(mat[j][k]);
  };
  const changeEl = (i, j, k, arr) => {
    mat[j][k] = arr[i].shift();
  };
  const walkDiagonal = (i, j, k, arr, func) => {
    for (j, k; j < row && k < col; j++, k++) {
      func(i, j, k, arr);
    }
  };
  const row = mat.length;
  const col = mat[0].length;
  const arrCol = [];
  const arrRow = [];

  for (let i = 0; i < col; i++) {
    arrCol[i] = [];
    walkDiagonal(i, 0, i, arrCol, takeEl);
  }
  for (let i = 1; i < row; i++) {
    arrRow[i] = [];
    walkDiagonal(i, i, 0, arrRow, takeEl);
  }

  arrCol.map(el => el.sort((a, b) => a - b));
  arrRow.map(el => el.sort((a, b) => a - b));

  for (let i = 0; i < col; i++) {
    walkDiagonal(i, 0, i, arrCol, changeEl);
  }

  for (let i = 1; i < row; i++) {
    walkDiagonal(i, i, 0, arrRow, changeEl);
  }

  return mat;
};
