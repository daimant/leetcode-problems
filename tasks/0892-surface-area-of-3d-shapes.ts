// Accepted 91 / 91 testcases passed Sergey Pomortsev submitted at Mar 12, 2026 14:30
// Solution Runtime 1 ms Beats 83.33% Memory 55.73 MB Beats 83.33%

function surfaceArea(grid: number[][]): number {
  let result = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      // under upper
      if (grid[i][j]) result += 2;

      // top
      if (!j) result += grid[i][j];
      // right
      if (j === grid.length - 1) result += grid[i][j];
      else result += Math.abs(grid[i][j] - grid[i][j + 1]);
      // bottom
      if (i === grid.length - 1) result += grid[i][j];
      else result += Math.abs(grid[i][j] - grid[i + 1][j]);
      // left
      if (!i) result += grid[i][j];
    }
  }

  return result;
};