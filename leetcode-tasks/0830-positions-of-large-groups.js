"use strict";

/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
  let result = [],
    start,
    count = 0;

  for (let i = 0; i < S.length; i++) {
    if (count === 0) start = i;
    count++;
    if (S[i] !== S[i + 1] && count >= 3) result.push([start, i]);
    if (S[i] !== S[i + 1]) count = 0;
  }

  return result;
};
