"use strict";

/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
  if (A.length < 3) return false;

  let summit = Math.max(...A);
  let topPassed = 0;

  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] === summit) topPassed++;
    if (
      A[0] === summit ||
      A[A.length - 1] === summit ||
      (topPassed === 0 && A[i] >= A[i + 1]) ||
      (topPassed === 1 && A[i] <= A[i + 1])
    )
      return false;
  }

  return true;
};
