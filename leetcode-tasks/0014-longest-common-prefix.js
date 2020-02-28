"use strict";

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0 || strs[0] === "") return "";
  // if (strs[0][0] !== strs[1][0]) return '';
  let result = "";
  let countWords = 0;

  for (let i = 0; i < strs[0].length; i++) {
    countWords = 1;

    for (let j = 1; j < strs.length; j++) {
      if (strs[j] === "") break;

      if (strs[0][i] === strs[j][i]) {
        countWords++;
        continue;
      } else break;
    }

    if (countWords === strs.length) {
      result += strs[0][i];
    } else break;
  }
  return result;
};
