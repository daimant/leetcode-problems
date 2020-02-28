"use strict";

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  nums.sort((a, b) => a - b);

  let withNeg = nums[0] * nums[1] * nums[nums.length - 1];
  let max = nums
    .slice(nums.length - 3, nums.length)
    .reduce((prev, curr) => (curr *= prev));

  return withNeg > max ? withNeg : max;
};
