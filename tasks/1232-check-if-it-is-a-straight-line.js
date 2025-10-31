"use strict";

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coord) {
  if (coord.length === 2) return true;
  if (
    coord.every(el => el[0] === coord[0][0]) ||
    coord.every(el => el[1] === coord[0][1])
  )
    return true;

  for (let i = 2; i < coord.length; i++) {
    if (
      !(
        (coord[i][0] - coord[0][0]) / (coord[1][0] - coord[0][0]) ===
        (coord[i][1] - coord[0][1]) / (coord[1][1] - coord[0][1])
      )
    )
      return false;
  }

  return true;
};
