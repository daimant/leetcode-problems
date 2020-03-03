"use strict";

/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  let map = new Map();
  let minSubArr = nums.length;

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) map.set(nums[i], map.get(nums[i]) + 1);
    if (!map.has(nums[i])) map.set(nums[i], 1);
  }

  let maxRep = Math.max(...Array.from(map.values()));
  let arr = Array.from(map).sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] !== maxRep) break;

    let currSubArr = nums.lastIndexOf(arr[i][0]) - nums.indexOf(arr[i][0]) + 1;

    if (currSubArr < minSubArr) minSubArr = currSubArr;
  }

  return minSubArr;
};
