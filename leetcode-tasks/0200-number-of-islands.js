"use strict";

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (!grid.length) return 0;
  let start = new Set(),
    checked = new Set(),
    needCheck = [],
    islandCount = 0,
    xLen = grid.length,
    yLen = grid[0].length;

  const isCurrIsland = currPoint => {
    start.delete(currPoint);
    checked.add(currPoint);
    const [x, y] = currPoint.split(",").map(el => +el);

    if (x > 0 && grid[x - 1][y] === "1") needCheck.push(`${x - 1},${y}`);
    if (x < xLen - 1 && grid[x + 1][y] === "1") needCheck.push(`${x + 1},${y}`);
    if (y > 0 && grid[x][y - 1] === "1") needCheck.push(`${x},${y - 1}`);
    if (y < yLen - 1 && grid[x][y + 1] === "1") needCheck.push(`${x},${y + 1}`);
  };

  for (let i = 0; i < xLen; i++) {
    for (let j = 0; j < yLen; j++) {
      if (grid[i][j] === "1") start.add(`${i},${j}`);
    }
  }
  while (start.size) {
    needCheck.push([...start][0]);

    while (needCheck.length) {
      let currPoint = needCheck.shift();
      if (checked.has(currPoint)) continue;
      isCurrIsland(currPoint);
    }

    islandCount++;
  }

  return islandCount;
};
