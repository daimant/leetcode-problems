"use strict";

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    if (
      numbers[i] + numbers[numbers.indexOf(target - numbers[i], i + 1)] ===
      target
    )
      return [i + 1, numbers.indexOf(target - numbers[i], i + 1) + 1];
  }
};
