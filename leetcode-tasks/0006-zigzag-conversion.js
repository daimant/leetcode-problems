"use strict";

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (!s.length || !numRows) return s;
  function add(row) {
    arr[row] += s[i];
    i++;
  }
  let arr = new Array(numRows).fill(""),
    i = 0;

  while (i < s.length) {
    for (let j = 0; j < numRows && i < s.length; j++) add(j);
    for (let k = numRows - 2; k > 0 && i < s.length; k--) add(k);
  }

  return arr.join("");
};
