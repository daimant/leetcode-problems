"use strict";

/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
  let arr = [];
  nums.forEach(el => el.forEach(el => arr.push(el)));

  if (arr.length !== r * c) return nums;

  nums = [];
  for (let i = 0; i < r; i++) {
    nums.push(arr.slice(c * i, c * i + c));
  }

  return nums;
};
