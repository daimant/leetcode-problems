"use strict";

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    result += (s[i].codePointAt() - 64) * 26 ** (s.length - i - 1);
  }

  return result;
};
