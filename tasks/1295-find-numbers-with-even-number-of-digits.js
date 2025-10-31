"use strict";

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  let countEven = 0;

  // for(let i = 0; i < nums.length; i++) {
  //     if ( (String(nums[i]).length + 1) % 2 ) countEven += 1;
  // }

  nums.forEach(num => (countEven += (String(num).length + 1) % 2 ? 1 : 0));

  return countEven;
};
