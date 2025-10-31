"use strict";

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
  let maxVal;
  for (let i = 0; i < arr.length; i++) {
    maxVal = arr[i + 1];

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > maxVal) maxVal = arr[j];
    }
    arr[i] = maxVal;
    if (i === arr.length - 1) arr[arr.length - 1] = -1;
  }
  return arr;
};
