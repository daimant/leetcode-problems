"use strict";

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
  if (guess(1) === 0) return 1;
  if (guess(n) === 0) return n;

  let left = 1,
    right = n;

  while (1) {
    const mid = Math.ceil(right - (right - left) / 2);
    const get = guess(mid);

    if (get === 0) return mid;
    if (get === -1) {
      right = mid;
    } else left = mid;
  }
};
