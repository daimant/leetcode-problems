"use strict";

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function(A, K) {
  let sum = 0;
  A.sort((a, b) => (a > b ? 1 : -1));

  for (let i = 0; i < A.length; i++) {
    if (
      (A[i] < 0 && A[i + 1] <= 0 && K > 0) ||
      (A[i + 1] > 0 && K === 1) ||
      (A[i + 1] > 0 && K > 1 && Math.abs(A[i + 1]) < Math.abs(A[i]))
    ) {
      sum += -A[i];
      K--;
    } else if (A[i + 1] > 0 && K > 1) {
      A[i] = -A[i];
      K--;
      i--;
    } else sum += A[i];
  }

  return sum;
};
