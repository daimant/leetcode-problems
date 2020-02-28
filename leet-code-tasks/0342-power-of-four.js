"use strict";

/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
  return Number.isInteger(+(Math.log(num) / Math.log(4)).toFixed(14));
};
