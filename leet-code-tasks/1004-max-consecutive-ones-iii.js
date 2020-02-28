"use strict";

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
  let maxLen = 0;
  let countZero = 0;

  for (let i = 0; i < A.length; i++) {
    for (let j = i; j < A.length; j++) {
      if (A[j] === 0) countZero++;
      if (countZero > K) break;
      if (j - i + 1 > maxLen) maxLen = j - i + 1;
    }

    countZero = 0;
  }

  return maxLen;
};
