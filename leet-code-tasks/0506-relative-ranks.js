"use strict";

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
  let map = new Map(
    nums
      .slice()
      .sort((a, b) => b - a)
      .map((el, i) =>
        i === 0
          ? [el, "Gold Medal"]
          : i === 1
          ? [el, "Silver Medal"]
          : i === 2
          ? [el, "Bronze Medal"]
          : [el, i]
      )
  );

  for (let i = 0; i < nums.length; i++) {
    let currMapGet = map.get(nums[i]);
    nums[i] = isFinite(currMapGet) ? currMapGet + 1 + "" : currMapGet;
  }

  return nums;
};
