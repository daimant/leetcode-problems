"use strict";

/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
  let resultArr = [];

  for (let i = 0; i < index.length; i++) {
    resultArr.splice(index[i], 0, nums[i]);
  }

  return resultArr;
};
