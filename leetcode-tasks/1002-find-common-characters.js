"use strict";

/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
  let arr = [];

  A.sort((a, b) => (a.length > b.length ? 1 : -1));

  here: for (let i = 0; i < A[0].length; i++) {
    const currReg = new RegExp(`${A[0][i]}`);

    for (let j = 1; j < A.length; j++) {
      const currEl = A[j].replace(currReg, "");
      if (A[j].length === currEl.length) {
        continue here;
      }
      A[j] = currEl;
    }

    arr.push(A[0][i]);
  }

  return arr;
};
