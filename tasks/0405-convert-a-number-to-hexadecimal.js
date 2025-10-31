"use strict";

/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
  const pos = new Map([
    [10, "a"],
    [11, "b"],
    [12, "c"],
    [13, "d"],
    [14, "e"],
    [15, "f"]
  ]);
  const neg = new Map([
    [0, "f"],
    [-1, "e"],
    [-2, "d"],
    [-3, "c"],
    [-4, "b"],
    [-5, "a"],
    [-6, "9"],
    [-7, "8"],
    [-8, "7"],
    [-9, "6"],
    [-10, "5"],
    [-11, "4"],
    [-12, "3"],
    [-13, "2"],
    [-14, "1"],
    [-15, "0"]
  ]);
  let result = "";

  while (num >= 1) {
    const cut = num % 16;
    if (cut < 10) result = cut + result;
    else result = pos.get(cut) + result;
    num = Math.trunc(num / 16);
  }

  while (num <= -1) {
    if (result === "") num++;

    let cut = num % 16;

    num = Math.trunc(num / 16);
    result = neg.get(cut) + result;

    while (num > -1 && result.length < 8) result = "f" + result;
  }

  return result.length ? result : "0";
};
