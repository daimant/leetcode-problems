"use strict";

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
  let count = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0 && count === -1) continue;
    else if (nums[i] === 0 && nums[i + 1] === 0) count++;
    else if (
      (nums[i] === 0 && nums[i + 1] === 1 && count < k) ||
      (nums[i] === 1 && nums[i + 1] === 1 && k > 0)
    )
      return false;
    else if (nums[i] === 0 && nums[i + 1] === 1 && count >= k) count = 0;
    else if (nums[i] === 1) count = 1;
  }

  return true;
};
