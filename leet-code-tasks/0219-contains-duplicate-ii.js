"use strict";

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  for (let i = 0; i < nums.length; i++) {
    let nextIndex = nums.indexOf(nums[i], i + 1);
    if (nextIndex !== -1 && nextIndex - i <= k) return true;
  }
  return false;
};
