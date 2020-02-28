"use strict";

/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
  let maxPeak = 0,
    indexMaxPeak = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i - 1] < A[i] && A[i] > A[i + 1] && A[i] > maxPeak) {
      maxPeak = A[i];
      indexMaxPeak = i;
    }
  }
  return indexMaxPeak;
};
