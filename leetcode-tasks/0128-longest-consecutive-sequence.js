"use strict";

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const unique = new Set(nums);
  let max = 0;

  for (let num of nums) {
    if (!unique.has(num - 1)) {
      let el = num,
        sub = 1;

      while (unique.has(el + 1)) {
        sub++;
        el++;
      }
      if (sub > max) max = sub;
    }
  }

  return max;
};
