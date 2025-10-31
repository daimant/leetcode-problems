/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxIncreaseKeepingSkyline = function(grid) {
  const len = grid[0].length;
  const top = [];
  const left = [];
  let result = 0;

  for (let i = 0; i < len; i++) {
    left.push(Math.max(...grid.map(el => el[i])));
    top.push(Math.max(...grid[i]));
  }

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      result += Math.min(top[i], left[j]) - grid[i][j];
    }
  }

  return result;
};
