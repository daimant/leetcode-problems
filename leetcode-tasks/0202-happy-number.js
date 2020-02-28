"use strict";

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let count = 0;
  let currentValue;

  while (1) {
    currentValue = 0;
    n.toString()
      .split("")
      .forEach(item => (currentValue += item ** 2));
    n = currentValue;
    count++;
    if (n === 1) return true;
    if (count > 1000) return false;
  }
};
