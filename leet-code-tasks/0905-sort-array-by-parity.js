"use strict";

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  var a = [];

  for (let i in A) {
    if (A[i] % 2 !== 0) {
      a.push(A[i]);
    } else {
      a.splice(0, 0, A[i]);
    }
  }

  return a;
};
