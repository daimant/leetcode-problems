// Accepted
// Runtime 96 ms Beats 92.14% of users with JavaScript
// Memory 36.10 MB Beats 100.00% of users with JavaScript

"use strict";

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
  for (let i = 0; i < nums.length - 1; i++) {
    let acc = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      acc += nums[j];
      if (acc % k === 0 || acc === k) return true;
    }
  }
  return false;
};
