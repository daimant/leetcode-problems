"use strict";

/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
  let placeDash = [];

  for (let i = 0; i < S.length; i++) {
    if (S[i].replace(/[^a-z]/gi, "") !== S[i]) placeDash.push(i);
  }

  let updS = S.replace(/[^a-z]/gi, "")
    .split("")
    .reverse()
    .join("");

  for (let i = 0; i < placeDash.length; i++) {
    updS =
      updS.slice(0, placeDash[i]) + S[placeDash[i]] + updS.slice(placeDash[i]);
  }

  return updS;
};
