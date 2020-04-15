"use strict";

/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function(s, shift) {
  for (let i = 0; i < shift.length; i++) {
    let cut = shift[i][1] % s.length;

    if (!cut) continue;
    if (shift[i][0]) cut = s.length - cut;

    s = s.slice(cut) + s.slice(0, cut);
  }

  return s;
};
