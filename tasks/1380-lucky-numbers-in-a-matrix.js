"use strict";

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function(matrix) {
  let happyArr = [];
  const cLen = matrix.length;
  const rLen = matrix[0].length;

  for (let i = 0; i < cLen; i++) {
    outer: for (let j = 0; j < rLen; j++) {
      const currEl = matrix[i][j];

      for (let c = 0; c < cLen; c++) {
        if (c !== i && currEl < matrix[c][j]) continue outer;
      }
      for (let r = 0; r < rLen; r++) {
        if (r !== j && currEl > matrix[i][r]) continue outer;
      }

      happyArr.push(currEl);
    }
  }

  return happyArr;
};
