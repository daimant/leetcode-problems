"use strict";

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
  if (nums.length === 1) return nums;

  let currSum = 0;
  const sum = nums.reduce((acc, curr) => acc + curr);
  nums.sort((a, b) => (a < b ? 1 : -1));

  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];
    if (currSum > sum - currSum) return nums.slice(0, i + 1);
  }
};
