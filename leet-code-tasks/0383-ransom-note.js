"use strict";

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let map1 = new Map();
  let map2 = new Map();

  for (let i = 0; i < ransomNote.length; i++) {
    if (map1.has(ransomNote[i]))
      map1.set(ransomNote[i], map1.get(ransomNote[i]) + 1);
    if (!map1.has(ransomNote[i])) map1.set(ransomNote[i], 1);
  }
  for (let i = 0; i < magazine.length; i++) {
    if (map2.has(magazine[i])) map2.set(magazine[i], map2.get(magazine[i]) + 1);
    if (!map2.has(magazine[i])) map2.set(magazine[i], 1);
  }

  map1 = Array.from(map1);

  for (let i = 0; i < map1.length; i++) {
    if (!map2.has(map1[i][0]) || map2.get(map1[i][0]) < map1[i][1])
      return false;
  }

  return true;
};
