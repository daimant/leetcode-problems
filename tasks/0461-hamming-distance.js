"use strict";

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  x = x.toString(2).split("");
  y = y.toString(2).split("");
  let countDif = 0;

  while (x.length !== y.length) {
    if (x.length > y.length) {
      y.splice(0, 0, "0");
    } else x.splice(0, 0, "0");
  }

  for (let i = 0; i <= x.length - 1; i++) {
    if (x[i] !== y[i]) countDif++;
  }

  return countDif;
};
