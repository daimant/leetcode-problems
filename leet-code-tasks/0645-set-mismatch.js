"use strict";

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  let arr;

  nums.sort((a, b) => (a > b ? 1 : -1));

  for (let i = 0; i < nums.length; i++)
    if (nums[i] === nums[i + 1]) arr = nums.splice(i, 1);
  for (let i = 0; i < nums.length; i++) {
    if (nums.length === 1 && nums[0] === 1) {
      arr.push(nums[i] + 1);
      return arr;
    }
    if (nums.length === 1 && nums[0] === 2) {
      arr.push(nums[i] - 1);
      return arr;
    }
    if (nums[i] === i + 2) {
      arr.push(nums[i] - 1);
      return arr;
    }
  }
  if (arr.length === 1) {
    arr.push(nums[nums.length - 1] + 1);
    return arr;
  }
};
