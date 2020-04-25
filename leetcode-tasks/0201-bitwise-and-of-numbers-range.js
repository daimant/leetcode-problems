"use strict";

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
  for (let i = m; i < n; i++) {
    m = m & (i + 1);
    if (m === 0) return m;
  }

  return m;
};
