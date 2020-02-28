"use strict";

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) map.set(s[i], map.get(s[i]) + 1);
    if (!map.has(s[i])) map.set(s[i], 1);
  }

  map = Array.from(map).filter(el => el[1] === 1);

  return map.length > 0 ? s.indexOf(map[0][0]) : -1;
};
