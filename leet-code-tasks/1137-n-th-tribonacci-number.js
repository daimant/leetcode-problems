"use strict";

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  if (n === 0 || n === 1) return n;
  if (n === 2) return 1;

  let a = 0;
  let b = 1;
  let c = 1;
  let d;

  while (n > 2) {
    n--;
    d = a + b + c;
    a = b;
    b = c;
    c = d;
  }

  return c;
};

console.log(tribonacci(10));
