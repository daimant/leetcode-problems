"use strict";

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let currSum = nums.slice(0, k).reduce((prev, curr) => (curr += prev));
  let maxSum = currSum;

  for (let i = 1; i + k <= nums.length; i++) {
    currSum = currSum - nums[i - 1] + nums[i + k - 1];
    if (currSum > maxSum) maxSum = currSum;
  }

  return maxSum / k;
};
