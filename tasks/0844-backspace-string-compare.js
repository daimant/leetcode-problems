"use strict";

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  for (let i = 0; i < S.length; i++) {
    if (S[i] === "#" && i === 0) {
      S = S.slice(1);
      i--;
    }
    if (S[i] === "#" && i > 0) {
      S = S.slice(0, i - 1) + S.slice(i + 1);
      i -= 2;
    }
  }
  for (let i = 0; i < T.length; i++) {
    if (T[i] === "#" && i === 0) {
      T = T.slice(1);
      i--;
    }
    if (T[i] === "#" && i > 0) {
      T = T.slice(0, i - 1) + T.slice(i + 1);
      i -= 2;
    }
  }
  return S === T;
};
