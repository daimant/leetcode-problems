"use strict";

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  nums.sort();
  let maxCount = 0;
  let result = 0;
  let count = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) count++;

    if (count > maxCount) {
      maxCount = count;
      result = nums[i];
    }

    if (nums[i] !== nums[i + 1]) count = 1;
  }
  return result;
};

// одинаковые по времени решения 80мс, но верхнее короче
///**
// * @param {number[]} nums
// * @return {number}
// */
//var majorityElement = function(nums) {
//  nums.sort();
//  let currNum = nums[0];
//  let maxCount = 0;
//  let result = 0;
//  let count = 0;
//
//  for (let i = 0; i < nums.length; i++) {
//    if (nums[i] === currNum) count++;
//    if (count > maxCount) {
//      result = currNum;
//      maxCount = count;
//    }
//    if (nums[i] !== currNum) {
//      currNum = nums[i];
//      count = 1;
//    }
//  }
//  return result;
//};
