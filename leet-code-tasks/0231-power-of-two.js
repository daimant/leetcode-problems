"use strict";

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  while (n > 1) {
    n /= 2;
  }

  return n === 1;
};

//придумал более стройное решение
//return Number.isInteger(Math.log2(n));
