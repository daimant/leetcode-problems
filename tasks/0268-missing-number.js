"use strict";

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  nums.sort((a, b) => (a > b ? 1 : -1));

  for (let i = 0; i < nums.length + 1; i++) {
    if (i !== nums[i]) return i;
  }
};
