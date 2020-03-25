"use strict";

/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
  if (seats.indexOf(0) === -1) return;
  let count = 0,
    maxLen = 0;

  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 1) count = 0;
    if (seats[i] === 0) count++;
    if (count > maxLen) maxLen = count;
  }

  return Math.max(
    Math.ceil(maxLen / 2),
    seats.indexOf(1),
    seats.length - 1 - seats.lastIndexOf(1)
  );
};
