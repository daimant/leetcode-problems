"use strict";

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length; ) {
    let index = nums.indexOf(nums[i], i + 1);
    if (index !== -1) {
      nums.splice(index, 1);
    } else i++;
  }
  return;
};
