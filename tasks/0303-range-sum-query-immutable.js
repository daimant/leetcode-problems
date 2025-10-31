"use strict";

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  arr = nums;
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  let sum = 0;

  for (i; i <= j; i++) {
    sum += arr[i];
  }

  return sum;
};

//отличное решение не проходит по времени
// arr.slice(i, j+1).reduce((prev,curr) => curr += prev);

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
