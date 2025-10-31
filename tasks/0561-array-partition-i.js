"use strict";

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  return nums
    .sort((a, b) => a - b)
    .filter((el, i) => i % 2 === 0)
    .reduce((prev, curr) => (curr += prev));
};
