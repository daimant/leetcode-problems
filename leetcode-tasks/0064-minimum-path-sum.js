/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const table = new Map([["0,0", grid[0][0]]]),
    parents = new Map([["0,0", "start"]]),
    canCheck = ["0,0"],
    row = grid.length,
    col = grid[0].length;

  while (canCheck.length) open(canCheck.shift());

  return table.get(`${row - 1},${col - 1}`);

  function open(dot) {
    let [x, y] = dot.split(",");
    x = +x;
    y = +y;
    const parent = parents.get(dot),
      parentVal = +table.get(parent) ? table.get(parent) : 0,
      right = `${x},${y + 1}`,
      down = `${x + 1},${y}`,
      currCost = parentVal + grid[x][y];

    if (
      (y < col - 1 && !table.has(right)) ||
      (y < col - 1 && table.get(right) > grid[x][y + 1] + currCost)
    )
      add(right, dot, grid[x][y + 1] + currCost);
    if (
      (x < row - 1 && !table.has(down)) ||
      (x < row - 1 && table.get(down) > grid[x + 1][y] + currCost)
    )
      add(down, dot, grid[x + 1][y] + currCost);
  }

  function add(what, parent, cost) {
    canCheck.push(what);
    parents.set(what, parent);
    table.set(what, cost);
  }
};
