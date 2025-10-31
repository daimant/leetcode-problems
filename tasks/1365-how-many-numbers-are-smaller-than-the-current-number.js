"use strict";

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  let map = new Map();
  let arr = nums.slice().sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) if (!map.has(arr[i])) map.set(arr[i], i);
  for (let i = 0; i < nums.length; i++) nums[i] = map.get(nums[i]);

  return nums;
};
