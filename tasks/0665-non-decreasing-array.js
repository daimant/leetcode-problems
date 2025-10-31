"use strict";

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  let error = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] <= nums[i + 1]) continue;
    if (nums[i] > nums[i + 1] && !error) {
      if (
        i === 0 ||
        i === nums.length - 2 ||
        nums[i - 1] <= nums[i + 1] ||
        nums[i] <= nums[i + 2]
      ) {
        error++;
        continue;
      }
    }
    return false;
  }
  return true;
};
