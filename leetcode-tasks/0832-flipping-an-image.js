"use strict";

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  for (let i = 0; i < A.length; i++) {
    A[i] = A[i].reverse();
    for (let j = 0; j < A[i].length; j++) {
      A[i][j] = A[i][j] === 1 ? 0 : 1;
    }
  }
  return A;
};
//     .map((element) => element === 1 ? element = 0 : element = 1);
