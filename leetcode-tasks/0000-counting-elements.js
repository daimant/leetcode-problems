'use strict';

/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
  let unique = new Set(arr);
  let table = new Map();
  let count = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (table.has(arr[i])) table.set(arr[i], table.get(arr[i]) + 1);
    if (!table.has(arr[i])) table.set(arr[i], 1);
  }
  
  unique = [...unique];
  
  for (let i = 0; i < unique.length; i++) {
    if (table.has(unique[i] + 1)) count += table.get(unique[i]);
  }
  
  return count;
};