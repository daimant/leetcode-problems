"use strict";

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s
    .split(" ")
    .filter(a => a.length > 0)
    .reverse()
    .join(" ");
};
