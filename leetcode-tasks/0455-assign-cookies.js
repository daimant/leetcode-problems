"use strict";

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let countHappyChild = 0;
  let countChild = 0;
  let countGifts = 0;

  while (countChild < g.length && countGifts < s.length) {
    if (s[countGifts] >= g[countChild]) {
      countHappyChild++;
      countGifts++;
      countChild++;
      continue;
    }
    if (s[countGifts] < g[countChild]) countGifts++;
  }

  return countHappyChild;
};
