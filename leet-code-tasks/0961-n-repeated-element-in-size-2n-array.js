"use strict";

/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
  let count = 0,
    val = 0,
    maxFind = 0;
  A.sort((a, b) => (a > b ? 1 : 0));

  for (let key = 0; key < A.length; key++) {
    if (A[key] === A[key + 1]) {
      count++;
    }

    if (A[key] !== A[key + 1] && count > maxFind) {
      val = A[key];
      maxFind = count;
    }

    if (A[key] !== A[key + 1] && count < maxFind) count = 0;
  }
  return val;
};
