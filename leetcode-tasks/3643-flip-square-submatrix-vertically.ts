// Accepted 674 / 674 testcases passed Sergey Pomortsev submitted at Oct 26, 2025 16:59
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 65.73 MB Beats 20.83%

const reverseSubmatrix = (grid: number[][], x: number, y: number, k: number): number[][] => {
  for (let row = x; row < x + Math.trunc(k / 2); row++) {
    for (let col = y; col < y + k; col++) {
      const temp = grid[row][col]
      grid[row][col] = grid[x + k - 1 - (row - x)][col]
      grid[x + k - 1 - (row - x)][col] = temp
    }
  }

  return grid
}