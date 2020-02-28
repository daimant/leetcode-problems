"use strict";

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
  return grid
    .map(el => el.filter(el => el !== Math.abs(el)))
    .map(el => el.length)
    .reduce((prev, curr) => (curr += prev));
};
