"use strict";

/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function(x, y, bound) {
  let result = [];

  for (let i = 2; i <= bound; i++) {
    let powJ = 1;

    here: while (powJ <= bound) {
      let powK = 1;

      while (powK + powJ <= bound) {
        if (powJ + powK === i) {
          result.push(i);
          break here;
        }
        if (y === 1) break;
        powK *= y;
      }

      if (x === 1) break;
      powJ *= x;
    }
  }

  return result;
};
