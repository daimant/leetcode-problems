"use strict";

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  let arr = [1, 2, 3, 5];

  for (let i = 0; i < n * 3; i++) {
    if (arr.indexOf(arr[i] * arr[1]) === -1) arr.push(arr[i] * arr[1]);
    if (arr.indexOf(arr[i] * arr[2]) === -1) arr.push(arr[i] * arr[2]);
    if (arr.indexOf(arr[i] * arr[3]) === -1) arr.push(arr[i] * arr[3]);
  }

  arr.sort((a, b) => (a > b ? 1 : -1));
  return arr[n - 1];
};

// не проходит по времени с 1690 по счету числом
//   let arr = [1,2,3,5];
//   for (let i = 0; arr.length < n * n; i++) {
//     arr.push(arr[i] * arr[1]);
//     arr.push(arr[i] * arr[2]);
//     arr.push(arr[i] * arr[3]);
//   }
//   arr.sort((a,b) => a  > b ? 1 : -1)
//   let set = Array.from(new Set(arr))//[arr.length-1]
//   console.log(set)
//   return set[n-1]
