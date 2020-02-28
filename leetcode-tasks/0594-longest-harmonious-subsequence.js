"use strict";

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  let maxLength = 0;
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) map.set(nums[i], map.get(nums[i]) + 1);
    if (!map.has(nums[i])) map.set(nums[i], 1);
  }

  for (let i = 0; i < nums.length - 1; i++) {
    if (map.get(nums[i]) + map.get(nums[i] + 1) > maxLength)
      maxLength = map.get(nums[i]) + map.get(nums[i] + 1);
  }

  return maxLength;
};
