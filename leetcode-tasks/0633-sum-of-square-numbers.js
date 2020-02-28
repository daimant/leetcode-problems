"use strict";

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
  if (Math.sqrt(c) === Math.trunc(Math.sqrt(c))) return true;

  for (let i = 1; i < Math.sqrt(c); i++) {
    let j = Math.trunc(Math.sqrt(c - i * i));
    if (i * i + j * j === c) return true;
  }

  return false;
};

// слишком долгий метод
//   for (let i = 0; i < Math.sqrt(c) + 1; i++) {
//     for (let j = 0; j < Math.sqrt(c) + 1; j++) {
//       if ( i * i + j * j === c) return true;
//     }
//   }
//   return false;
