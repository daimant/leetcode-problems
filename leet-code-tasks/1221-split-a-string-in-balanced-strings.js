"use strict";

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  let countStr = 0,
    r = 0,
    l = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") r++;
    if (s[i] === "L") l++;
    if (r === l) {
      r = l = 0;
      countStr += 1;
    }
  }
  return countStr;
};
