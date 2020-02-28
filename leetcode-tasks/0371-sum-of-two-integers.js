"use strict";

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  const absB = Math.abs(b);

  if (absB === b) {
    for (let i = 0; i < absB; i++) a++;
  }

  if (absB !== b) {
    for (let i = 0; i < absB; i++) a--;
  }

  return a;
};
