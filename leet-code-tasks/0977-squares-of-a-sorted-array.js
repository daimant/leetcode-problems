"use strict";

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  return A.map(element => element ** 2).sort((a, b) => (a > b ? 1 : -1));
};
