"use strict";

/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
  if (n === 0) return "";
  if (n === 1) return "a";
  if (n === 2) return "ab";
  let result = "";

  for (let i = 0; i < n; i++) {
    if (n % 2 !== 0 && i === n - 2) {
      result += "bc";
      break;
    }

    if (n % 2 === 0 && i === n - 1) {
      result += "b";
      break;
    }

    result += "a";
  }

  return result;
};
