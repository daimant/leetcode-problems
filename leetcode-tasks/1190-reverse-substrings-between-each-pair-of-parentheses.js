// Accepted
// Runtime 60 ms Beats 35.19%
// Memory 36.15 MB Beats 100.00%

"use strict";

/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
  let start = 0,
    end,
    count;

  outer: while (1) {
    for (let i = start; i < s.length; i++) {
      if (s[i] === "(") {
        start = i;
        count = 1;
        break;
      } else if (s[i] === ")") {
        start = i;
        count = -1;
        break;
      }
      if (i + 1 === s.length) break outer;
    }

    for (let j = start + 1; j < s.length; j++) {
      if (s[j] === ")") count--;
      else if (s[j] === "(") count++;

      if (count === 0) {
        end = j;
        break;
      }
    }

    s =
      s.slice(0, start) +
      [...s.slice(start + 1, end)].reverse().join("") +
      s.slice(end + 1);
    if (start >= s.length) break;
  }

  return s;
};
