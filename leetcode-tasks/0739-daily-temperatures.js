"use strict";

/**
 * @param {number[]} t
 * @return {number[]}
 */
var dailyTemperatures = function(t) {
  outer: for (let i = 0; i < t.length; i++) {
    const currT = t[i];

    for (let j = i + 1; j < t.length; j++) {
      if (currT < t[j]) {
        t[i] = j - i;
        continue outer;
      }
    }

    if (currT === t[i]) t[i] = 0;
  }

  return t;
};
