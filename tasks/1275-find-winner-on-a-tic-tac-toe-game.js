"use strict";

/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
  let f = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
  ];

  for (let i = 0; i < moves.length; i++) {
    if (i % 2 === 0) {
      f[moves[i][0]][moves[i][1]] = "A";
    } else f[moves[i][0]][moves[i][1]] = "B";
  }

  if (
    (f[0][0] === f[1][1] && f[1][1] === f[2][2] && f[1][1] !== " ") ||
    (f[2][0] === f[1][1] && f[1][1] === f[0][2] && f[1][1] !== " ")
  )
    return f[1][1];

  if (f[0][0] === f[0][1] && f[0][1] === f[0][2] && f[0][0] !== " ")
    return f[0][0];
  if (f[1][0] === f[1][1] && f[1][1] === f[1][2] && f[1][0] !== " ")
    return f[1][0];
  if (f[2][0] === f[2][1] && f[2][1] === f[2][2] && f[2][0] !== " ")
    return f[2][0];

  if (f[0][0] === f[1][0] && f[1][0] === f[2][0] && f[0][0] !== " ")
    return f[0][0];
  if (f[0][1] === f[1][1] && f[1][1] === f[2][1] && f[0][1] !== " ")
    return f[0][1];
  if (f[0][2] === f[1][2] && f[1][2] === f[2][2] && f[0][2] !== " ")
    return f[0][2];

  return f.find(item => item.includes(" ")) ? "Pending" : "Draw";
};
