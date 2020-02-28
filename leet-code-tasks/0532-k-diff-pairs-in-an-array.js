"use strict";

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  if (k < 0) return 0;

  if (k === 0) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
      if (map.has(nums[i])) map.set(nums[i], map.get(nums[i]) + 1);
      if (!map.has(nums[i])) map.set(nums[i], 1);
    }
    return Array.from(map.values()).filter(el => el > 1).length;
  }

  let count = 0;
  let set = new Set(nums);
  nums = Array.from(set);

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i] + k)) count++;
  }

  return count;
};
