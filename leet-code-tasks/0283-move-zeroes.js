"use strict";

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = nums => {
  let count = 0;

  nums.forEach(el => (count = el === 0 ? count + 1 : count));
  for (let i = 0; i < nums.length - count; i++) {
    if (nums[i] === 0) {
      nums.push(nums.splice(i, 1));
      i--;
    }
  }
};
