"use strict";

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    let currCount = 2;
    let currArr = [1, nums[i]];

    for (let j = 2; j < nums[i]; j++) {
      if (nums[i] % j === 0) {
        currCount++;
        currArr.push(j);
      }

      if (currCount > 4) break;
    }

    if (currCount === 4) arr.push(...currArr);
  }

  return arr.length > 0 ? arr.reduce((a, b) => (b += a)) : 0;
};
