"use strict";

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  let mapS = new Map();
  let mapT = new Map();

  for (let i = 0; i < s.length; i++) {
    if (mapS.has(s[i])) mapS.set(s[i], mapS.get(s[i]) + 1);
    if (!mapS.has(s[i])) mapS.set(s[i], 1);
  }

  for (let i = 0; i < t.length; i++) {
    if (mapT.has(t[i])) mapT.set(t[i], mapT.get(t[i]) + 1);
    if (!mapT.has(t[i])) mapT.set(t[i], 1);

    if (!mapS.has(t[i]) || mapS.get(t[i]) < mapT.get(t[i])) return t[i];
  }
};
