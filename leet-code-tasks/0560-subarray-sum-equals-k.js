"use strict";

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  if (!nums || !nums.length) return 0;

  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let acc = nums[i];
    if (acc === k) count++;

    for (let j = i + 1; j < nums.length; j++) {
      acc += nums[j];
      if (acc === k) count++;
    }
  }
  return count;
};
