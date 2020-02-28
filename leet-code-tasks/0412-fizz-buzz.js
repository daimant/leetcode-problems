"use strict";

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n, arr = []) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 !== 0 && i % 5 !== 0) {
      arr.push(`${i}`);
      continue;
    }
    if (i % 3 === 0 && i % 5 !== 0) {
      arr.push("Fizz");
      continue;
    }
    if (i % 5 === 0 && i % 3 !== 0) {
      arr.push("Buzz");
      continue;
    }
    arr.push("FizzBuzz");
  }

  return arr;
};
