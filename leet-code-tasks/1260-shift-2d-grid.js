"use strict";

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
  const startLen = grid[0].length;
  let arr = [];

  for (let i = 0; i < grid.length; i++) {
    grid[i].forEach(item => arr.push(item));
  }

  if (k % arr.length === 0) return grid;
  if (k > arr.length) k = k % arr.length;

  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }

  grid = [];

  for (let i = 0; i < arr.length; i += startLen) {
    grid.push([...arr.slice(i, i + startLen)]);
  }

  return grid;
};

// не работает
// console.log(grid.flat(1))
