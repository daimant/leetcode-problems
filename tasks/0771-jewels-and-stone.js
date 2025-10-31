"use strict";

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

var numJewelsInStones = (J, S) => {
  return S.replace(new RegExp(`[^${J}]`, "g"), "").length;
};
// let countJewels = 0;
//
// for (let i = 0; i < J.length; i++) {
//   for (let j = 0; j < S.length; j++) {
//     if (J[i] === S[j]) {
//       countJewels += 1;
//     }
//   }
// }
//
// return countJewels;
