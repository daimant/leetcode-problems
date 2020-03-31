"use strict";

/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
  A.sort((a, b) => (a < b ? 1 : -1));
  for (let i = 0; i < A.length - 2; i++) {
    let p = (A[i] + A[i + 1] + A[i + 2]) / 2;
    if (Math.sqrt(p * (p - A[i]) * (p - A[i + 1]) * (p - A[i + 2])) > 0)
      return p * 2;
  }
  return 0;
};
