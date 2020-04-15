"use strict";

/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
  for (let i = 0; i < S.length; i++) {
    if (i > 0 && S[i] === S[i + 1]) {
      S = S.slice(0, i) + S.slice(i + 2);
      i--;
    } else if (i > 0 && S[i] === S[i - 1]) {
      S = S.slice(0, i - 1) + S.slice(i + 1);
      i -= 2;
    }
  }

  return S;
};
