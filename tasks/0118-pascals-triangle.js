"use strict";

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let arr = [[1]];
  let current = [];

  if (numRows === 0) return current;
  if (numRows === 1) return arr;

  for (let i = 2; i <= numRows; i++) {
    for (let j = 0; j <= i; j++) {
      if (j === 0) {
        current.push(1);
        continue;
      }

      if (j === i - 1) {
        current.push(1);
        break;
      }

      current.push(arr[i - 2][j] + arr[i - 2][j - 1]);
    }
    arr.push(current);
    current = [];
  }
  return arr;
};
