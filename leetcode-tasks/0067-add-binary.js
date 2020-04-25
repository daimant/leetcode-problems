"use strict";

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let up = 0,
    aLen = a.length,
    bLen = b.length,
    greater = aLen > bLen ? aLen : bLen,
    result = "";

  a = [...a].reverse();
  b = [...b].reverse();

  for (let i = 0; i < greater; i++) {
    if (a[i] === "1" && b[i] === "1") {
      if (up) result = 1 + result;
      else if (!up) {
        result = 0 + result;
        up++;
      }
    } else if (
      (a[i] !== "1" && b[i] === "1") ||
      (a[i] === "1" && b[i] !== "1")
    ) {
      if (up) result = 0 + result;
      else if (!up) result = 1 + result;
    } else if (a[i] !== "1" && b[i] !== "1") {
      if (up) {
        result = 1 + result;
        up--;
      } else if (!up) result = 0 + result;
    }
  }
  if (up) result = 1 + result;
  return result;
};

var addBinary2 = function(a, b) {
  return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
};
