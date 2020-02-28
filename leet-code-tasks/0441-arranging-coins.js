"use strict";

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  let i = 0;

  while (n > 0) {
    i++;
    n -= i;
  }

  return --i;
};
