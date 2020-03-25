"use strict";

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
  let result = [];
  A.forEach((el, i) =>
    el.forEach((elIn, iIn) => {
      if (i === 0) {
        result.push([elIn]);
      } else result[iIn].push(elIn);
    })
  );

  return result;
};
