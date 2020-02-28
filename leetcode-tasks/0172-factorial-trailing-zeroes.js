"use strict";

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let result = 0;

  while (n > 4) {
    n = Math.trunc(n / 5);
    result += n;
  }

  return result;
};

//   let result = 1n;
//   n = BigInt(n);

//   while(n > 0n){
//     result *= n;
//     n -= 1n;
//   }

//   result = result.toString().split('').reverse();
//   let i = 0
//   for(i; i < result.length; i++) {
//     if (result[i] !== '0') break;
//   }

//   return i;
