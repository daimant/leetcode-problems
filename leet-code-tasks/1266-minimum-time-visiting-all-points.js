"use strict";

/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
  let count = 0;

  for (let i = 1; i < points.length; i++) {
    const curr = points[i];
    const prev = points[i - 1];
    const a = Math.abs(prev[0] - curr[0]);
    const b = Math.abs(prev[1] - curr[1]);

    count += Math.max(a, b);
  }

  return count;
};
