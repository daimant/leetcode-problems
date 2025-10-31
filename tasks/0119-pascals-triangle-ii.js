"use strict";

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let arr = [[1]];
  let current = [];

  if (rowIndex + 1 === 0) return current;
  if (rowIndex + 1 === 1) return arr;

  for (let i = 2; i <= rowIndex + 1; i++) {
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

  return arr[arr.length - 1];
};
