"use strict";

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  digits.reverse();
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] !== 9) {
      digits[i]++;
      break;
    }

    if (digits[i] === 9 && digits.length - 1 === i) {
      digits[i] = 0;
      digits.push(1);
      break;
    }

    if (digits[i] === 9) {
      digits[i] = 0;
      continue;
    }
  }

  return digits.reverse();
};
