"use strict";

/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
  let rook = [],
    u = 1,
    d = 1,
    l = 1,
    r = 1,
    count = 0;
  board.forEach((el, i) =>
    el.forEach((el1, i1) => {
      if (el1 === "R") rook = [i, i1];
    })
  );

  for (let i = 1; u || d || l || r; i++) {
    if (u && rook[0] - i >= 0) {
      if (board[rook[0] - i][rook[1]] === "p") {
        count++;
        u = 0;
      }
      if (board[rook[0] - i][rook[1]] === "B" || rook[0] - i === 0) u = 0;
    }
    if (d && rook[0] + i <= 7) {
      if (board[rook[0] + i][rook[1]] === "p") {
        count++;
        d = 0;
      }
      if (board[rook[0] + i][rook[1]] === "B" || rook[0] + i === 7) d = 0;
    }
    if (l && rook[1] - i >= 0) {
      if (board[rook[0]][rook[1] - i] === "p") {
        count++;
        l = 0;
      }
      if (board[rook[0]][rook[1] - i] === "B" || rook[1] - i === 0) l = 0;
    }
    if (r && rook[1] + i <= 7) {
      if (board[rook[0]][rook[1] + i] === "p") {
        count++;
        r = 0;
      }
      if (board[rook[0]][rook[1] + i] === "B" || rook[1] + i === 7) r = 0;
    }
  }

  return count;
};
