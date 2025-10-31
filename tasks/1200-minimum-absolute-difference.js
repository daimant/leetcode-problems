"use strict";

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
  arr.sort((a, b) => (a > b ? 1 : -1));

  let result = [[arr[0], arr[1]]];
  let min = Math.abs(arr[0] - arr[1]);

  for (let i = 1; i < arr.length; i++) {
    if (Math.abs(arr[i] - arr[i + 1]) === min)
      result.push([arr[i], arr[i + 1]]);

    if (Math.abs(arr[i] - arr[i + 1]) < min) {
      result = [];
      min = Math.abs(arr[i] - arr[i + 1]);
      result.push([arr[i], arr[i + 1]]);
    }
  }

  return result;
};
