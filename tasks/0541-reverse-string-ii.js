"use strict";

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  let result = "";
  for (let i = 0; i < s.length; i += k * 2) {
    result +=
      s
        .slice(i, i + k)
        .split("")
        .reverse()
        .join("") + s.slice(i + k, i + k * 2);
  }

  return result;
};
