"use strict";

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  if (s.length < 2) return s.length;

  let map = new Map();
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) map.set(s[i], map.get(s[i]) + 1);
    if (!map.has(s[i])) map.set(s[i], 1);
  }

  map = Array.from(map.values());

  if (map.find(el => el % 2 !== 0)) result++;
  map
    .filter(el => el > 1)
    .forEach(el => (el % 2 === 0 ? (result += el) : (result += el - 1)));

  return result;
};
