"use strict";

/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
  let i = 0;

  outer: while (true) {
    i++;

    let currVal = i;

    for (let j = 0; j < nums.length; j++) {
      currVal += nums[j];
      if (currVal < 1) continue outer;
    }

    return i;
  }
};
