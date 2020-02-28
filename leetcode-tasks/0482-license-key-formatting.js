"use strict";

/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
  S = S.replace(/-/g, "")
    .toUpperCase()
    .split("");

  for (let i = S.length % K ? S.length % K : K; i < S.length; i += K + 1) {
    S.splice(i, 0, "-");
  }

  return S.join("");
};
