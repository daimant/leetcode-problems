'use strict';

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let step = -1;
  let countOne = grid.reduce((acc, val) => acc.concat(val)).filter(el => el === 1).length;
  let canBeBad = [];
  grid.forEach((el, i) => el.forEach((el1, i1) => {
      if (el1 === 2) canBeBad.push([i, i1])
    }
  ));
  if (countOne === 0) return 0;
  
  
  while (canBeBad.length) {
    step++;
    let currCircle = canBeBad.length;
    
    while (currCircle) {
      let currOrange = canBeBad.shift();
      let j = currOrange[0];
      let k = currOrange[1];
      
      makeBad(j, k, grid, canBeBad);
      
      currCircle--;
    }
  }
  grid.forEach(el => {
    if (el.includes(1)) step = -1
  });
  
  return step;
};

const makeBad = (j, k, grid, canBeBad) => {
  if (j > 0 && grid[j - 1][k] === 1) {
    grid[j - 1][k] = 2;
    canBeBad.push([j - 1, k]);
  }
  if (j < grid.length - 1 && grid[j + 1][k] === 1) {
    grid[j + 1][k] = 2;
    canBeBad.push([j + 1, k]);
  }
  if (k > 0 && grid[j][k - 1] === 1) {
    grid[j][k - 1] = 2;
    canBeBad.push([j, k - 1]);
  }
  if (k < grid[j].length - 1 && grid[j][k + 1] === 1) {
    grid[j][k + 1] = 2;
    canBeBad.push([j, k + 1]);
  }
};