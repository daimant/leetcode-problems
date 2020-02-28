'use strict';

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  if (s === "") return true;

  let count = 0;

  for (let i = t.indexOf(s[0]); i < t.length; i++) {
    if (t[i] === s[count]) count++;
  }

  return count === s.length;
};