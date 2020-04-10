"use strict";

/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
  return parseInt(
    [...N.toString(2)].map(a => (a === "0" ? "1" : "0")).join(""),
    2
  );
};
