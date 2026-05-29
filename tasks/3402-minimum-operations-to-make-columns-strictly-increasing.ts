// Accepted 722 / 722 testcases passed Sergey Pomortsev submitted at Mar 04, 2026 19:32
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 58.42 MB Beats 50.00%

function minimumOperations(grid: number[][]): number {
  let count = 0
  for (let j = 0; j < grid[0].length; j++) {
    for (let i = 1; i < grid.length; i++) {
      if (grid[i][j] <= grid[i - 1][j]) {
        const curr = grid[i - 1][j] + 1 - grid[i][j];
        count += curr;
        grid[i][j] += curr;
      }
    }
  }

  return count;
};