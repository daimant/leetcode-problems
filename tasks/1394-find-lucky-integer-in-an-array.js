"use strict";

/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
  let table = new Map();
  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (table.has(arr[i])) table.set(arr[i], table.get(arr[i]) + 1);
    if (!table.has(arr[i])) table.set(arr[i], 1);
  }
  [...table].forEach(el => (el[0] === el[1] ? resultArr.push(el[0]) : ""));

  return resultArr.length === 1
    ? resultArr[0]
    : resultArr.length === 0
    ? -1
    : Math.max(...resultArr);
};
