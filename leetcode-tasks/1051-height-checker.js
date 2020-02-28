"use strict";

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  const sort = heights.slice().sort((a, b) => (a > b ? 1 : -1));
  let count = 0;
  for (let i = 0; i < heights.length; i++) if (heights[i] !== sort[i]) count++;
  return count;
};
