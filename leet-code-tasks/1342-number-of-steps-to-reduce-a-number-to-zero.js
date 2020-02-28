"use strict";

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
  let count = 0;
  for (count; num !== 0; count++) {
    if (num % 2 === 0) {
      num /= 2;
    } else num -= 1;
  }
  return count;
};
