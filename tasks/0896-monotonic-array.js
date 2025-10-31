"use strict";

/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  let typeArr = "";

  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] < A[i + 1]) {
      typeArr = "increase";
      break;
    }

    if (A[i] > A[i + 1]) {
      typeArr = "decrease";
      break;
    }
  }

  if (typeArr === "increase") {
    for (let i = 0; i < A.length - 1; i++) {
      if (A[i] > A[i + 1]) return false;
    }
  }

  if (typeArr === "decrease") {
    for (let i = 0; i < A.length - 1; i++) {
      if (A[i] < A[i + 1]) return false;
    }
  }

  return true;
};
