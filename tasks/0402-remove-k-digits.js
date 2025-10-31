"use strict";

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  if (!num.length) return num;
  let stack = [];

  for (let i = 0; i < num.length; i++) {
    while (k && stack.length && stack[stack.length - 1] > num[i]) {
      stack.pop();
      k--;
    }
    stack.push(num[i]);
  }

  stack.length = stack.length - k;
  let result = stack.join("").replace(/^0+/, "");
  return result ? result : "0";
};
