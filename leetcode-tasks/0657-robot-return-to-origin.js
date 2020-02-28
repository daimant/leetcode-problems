"use strict";

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  let x = 0,
    y = 0;
  for (let key = 0; key < moves.length; key++) {
    if (moves[key] === "L") x++;
    if (moves[key] === "R") x--;
    if (moves[key] === "U") y++;
    if (moves[key] === "D") y--;
  }

  return x === 0 && y === 0 ? true : false;
};
