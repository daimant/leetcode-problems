"use strict";

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  let unique = [],
    count = 0,
    uniqueCount = true;
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count++;
      continue;
    }
    if (arr[i] !== arr[i + 1] && unique.indexOf(count) === -1) {
      unique.push(count);
      count = 0;
    } else uniqueCount = false;
  }
  return uniqueCount;
};
