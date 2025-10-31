"use strict";

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let startLength = nums.length;

  nums = Array.from(new Set(nums));
  nums.sort((a, b) => a - b);

  let setLength = nums.length;
  let lastEl = nums[nums.length - 1];

  for (let i = 0; i < nums[nums.length - 1]; i++) {
    if (i + 1 === nums[i]) {
      nums[i] = 0;
      continue;
    }
    if (i + 1 !== nums[i]) {
      nums.splice(i, 0, i + 1);
    }
  }

  nums = nums.filter(el => el !== 0);

  if (nums.length !== startLength - setLength) {
    let diff = startLength - setLength - nums.length;
    for (let i = 0; i < diff; i++) nums.push(lastEl + 1 + i);
  }

  return nums;
};
