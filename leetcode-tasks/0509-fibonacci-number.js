"use strict";

/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  if (N === 0 || N === 1) return N;

  let a = 0;
  let b = 1;
  let c;

  while (N > 1) {
    N--;
    c = a + b;
    a = b;
    b = c;
  }

  return b;
};
