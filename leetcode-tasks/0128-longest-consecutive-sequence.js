"use strict";

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  nums = [...new Set(nums)];
  nums.sort((a, b) => (a > b ? 1 : -1));

  let count = 1;
  let maxLen = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1] - 1) count++;
    if (count > maxLen) maxLen = count;
    if (nums[i] !== nums[i + 1] - 1) count = 1;
  }

  return maxLen;
};
