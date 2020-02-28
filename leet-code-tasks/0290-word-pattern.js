"use strict";

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  if (!pattern.length || !str.length) return false;

  let map1 = new Map();
  let map2 = new Map();
  pattern = pattern.split("");
  str = str.split(" ");

  if (pattern.length !== str.length) return false;

  for (let i = 0; i < str.length; i++) {
    if (map1.has(pattern[i]))
      map1.set(pattern[i], [...map1.get(pattern[i]), i]);
    if (!map1.has(pattern[i])) map1.set(pattern[i], [i]);

    if (map2.has(str[i])) map2.set(str[i], [...map2.get(str[i]), i]);
    if (!map2.has(str[i])) map2.set(str[i], [i]);
  }

  return (
    JSON.stringify(Array.from(map2.values())) ===
    JSON.stringify(Array.from(map1.values()))
  );
};
