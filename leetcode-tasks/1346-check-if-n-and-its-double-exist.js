"use strict";

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
  let set = new Set(arr);

  for (let i = 0; i < arr.length; i++) {
    if (
      (arr[i] !== 0 && set.has(arr[i] * 2)) ||
      (arr[i] === 0 && arr.indexOf(0, i + 1) !== -1)
    )
      return true;
  }

  return false;
};
