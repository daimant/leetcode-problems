"use strict";

/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
  let uniqN;
  let uniqArr = [];

  if (n === 1) return [0];

  for (let i = 0; i < n; i++) {
    if (i === n - 1) {
      if (
        uniqArr.indexOf(-uniqArr.reduce((start, item) => start + item)) !== -1
      ) {
        i = -1;
        uniqArr = [];
        continue;
      }
      uniqArr.push(-uniqArr.reduce((start, item) => start + item));
      console.log(uniqArr.reduce((start, item) => start + item));
      break;
    }
    uniqN = +(Math.random() * n * 2 - n).toFixed(0);

    if (uniqArr.indexOf(uniqN) !== -1) {
      i--;
      continue;
    } else {
      uniqArr.push(uniqN);
    }
  }
  return uniqArr;
};

// а вот так надо было)
//
// let sumZero = (n, A = []) => {
//   if (n % 2) A.push(0);
//   for( let i = 1; i <= n/2; i++) {
//     A.push(i,-i);
//   }
//   return A
// }
