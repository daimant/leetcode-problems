// Accepted
// Runtime 128 ms Beats 17.25% of users with JavaScript
// Memory 34.81 MB Beats 100.00% of users with JavaScript

"use strict";

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    // if (nums[i] > target) continue;

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        arr.push(i, j);
      }
    }
  }

  return arr;
};
