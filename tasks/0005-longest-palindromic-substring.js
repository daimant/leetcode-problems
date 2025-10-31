"use strict";

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const len = s.length;
  if (!len) return s;
  let maxStr = s[0];

  for (let i = 0; i < len - 1; i++) {
    const currStart = i;
    let currEnd = -1;

    outer: for (let j = len - 1; j > i && j - i >= maxStr.length; j--) {
      if (s[j] === s[i]) {
        currEnd = j;

        for (let k = 0; k < (j - i) / 2; k++) {
          if (s[i + k] !== s[j - k]) continue outer;
        }
        const currStr = s.slice(i, j + 1);
        if (maxStr.length < currStr.length) maxStr = currStr;
      }
    }
  }
  return maxStr;
};
