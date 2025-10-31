"use strict";

/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function([[ax, ay], [bx, by], [cx, cy]]) {
  return (
    !(ax === bx && ay === by) &&
    !(cx === bx && cy === by) &&
    !(ax === bx && bx === cx) &&
    !(ay === by && by === cy) &&
    !((cx - ax) / (bx - ax) === (cy - ay) / (by - ay))
  );
};
