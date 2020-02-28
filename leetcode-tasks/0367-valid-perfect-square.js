"use strict";

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let count = 1;

  while (num > 0) {
    num -= count;
    if (num === 0) return true;
    count += 2;
  }

  return false;
};

// return Number.isInteger(Math.sqrt(num));
