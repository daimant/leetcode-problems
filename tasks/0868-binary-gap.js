"use strict";

/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function(N) {
  let currCount = 0;
  let max = 0;

  N = N.toString(2);

  for (let i = 0; i < N.length; i++) {
    currCount++;
    if (currCount > max && N[i + 1] === "1") max = currCount;
    if (N[i + 1] === "1") currCount = 0;
  }

  return max;
};
