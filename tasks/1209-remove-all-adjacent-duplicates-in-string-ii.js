"use strict";

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
  let count = 0;
  let currSymb = "";
  let nextSymb = "";

  for (let i = 0; i < s.length; i++) {
    if (i < 0) i = 0;
    currSymb = s[i];
    nextSymb = s[i + 1];
    count++;

    if (currSymb !== nextSymb && count >= k) {
      s = s.slice(0, i - count + (count % k) + 1) + s.slice(i + 1);
      i -= count + k;
      count = 0;
    } else if (currSymb !== nextSymb && count < k) {
      count = 0;
    }
  }

  return s;
};
