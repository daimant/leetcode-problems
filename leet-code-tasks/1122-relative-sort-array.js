"use strict";

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  let same = new Map();
  let diff = new Map();
  let result = [];

  for (let i = 0; i < arr2.length; i++) same.set(arr2[i], 0);
  for (let i = 0; i < arr1.length; i++) {
    if (same.has(arr1[i])) {
      same.set(arr1[i], same.get(arr1[i]) + 1);
      continue;
    }
    if (diff.has(arr1[i])) diff.set(arr1[i], diff.get(arr1[i]) + 1);
    if (!diff.has(arr1[i])) diff.set(arr1[i], 1);
  }

  diff = [...diff].sort((a, b) => (a[0] > b[0] ? 1 : -1));

  for (let entry of same) {
    for (let i = 0; i < entry[1]; i++) result.push(entry[0]);
  }
  for (let entry of diff) {
    for (let i = 0; i < entry[1]; i++) result.push(entry[0]);
  }

  return result;
};
