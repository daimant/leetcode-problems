"use strict";

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  let sum = 0,
    mult = 1;
  String(n)
    .split("")
    .map(num => {
      sum += +num;
      mult *= +num;
    });

  // for(let i = 1;)

  return mult - sum;
};
