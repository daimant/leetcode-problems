"use strict";

/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
  for (let i = 1; i < n; i++) {
    let curr = n - i;
    if (curr.toString().indexOf("0") === -1 && i.toString().indexOf("0") === -1)
      return [i, curr];
  }
};
