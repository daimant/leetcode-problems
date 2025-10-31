"use strict";

/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
  let result = "";
  let map = new Map();

  s = s.split("").sort();

  for (let i = 0; i < s.length; i++) {
    let curr = s[i];
    if (map.has(curr)) map.set(curr, map.get(curr) + 1);
    if (!map.has(curr)) map.set(curr, 1);
  }

  map = Array.from(map);

  let maxLength = Math.max(...map.map(el => el[1]));

  for (let i = 0; i < maxLength; i++) {
    if (i % 2 === 0)
      for (let j = 0; j < map.length; j++) {
        if (i < map[j][1]) result += map[j][0];
      }
    if (i % 2 !== 0)
      for (let j = map.length - 1; j >= 0; j--) {
        if (i < map[j][1]) result += map[j][0];
      }
  }

  return result;
};
