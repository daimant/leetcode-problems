"use strict";

/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
  return !+n
    .toString(2)
    .split("")
    .map((el, i) =>
      (i % 2 === 0 && el === "1") || (i % 2 !== 0 && el === "0") ? "0" : "1"
    )
    .join("");
};
