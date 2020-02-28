"use strict";

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  return JSON.stringify(nums) !== JSON.stringify(Array.from(new Set(nums)));
};
