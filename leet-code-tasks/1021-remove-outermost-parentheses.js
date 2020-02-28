"use strict";

/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
  let count = 0,
    output = "";

  for (let i = 0; i < S.length; i++) {
    if (S[i] === "(" && count === 0) {
      count++;
      continue;
    }
    if (S[i] === ")" && count === 1) {
      count--;
      continue;
    }
    if (S[i] === "(" && count !== 0) {
      output += S[i];
      count++;
      continue;
    }
    if (S[i] === ")" && count !== 0) {
      output += S[i];
      count--;
      continue;
    }
  }
  return output;
};
