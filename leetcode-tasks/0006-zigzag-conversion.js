"use strict";

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (!s.length || !numRows) return s;
  let arr = new Array(numRows).fill(""),
    i = 0;

  outer: while (1) {
    for (let j = 0; j < numRows; j++) {
      arr[j] += s[i];
      i++;
      if (i === s.length) break outer;
    }
    for (let k = numRows - 2; k > 0; k--) {
      arr[k] += s[i];
      i++;
      if (i === s.length) break outer;
    }
  }

  return arr.join("");
};
