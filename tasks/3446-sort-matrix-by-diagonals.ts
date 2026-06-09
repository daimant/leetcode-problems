// Accepted 1306 / 1306 testcases passed Sergey Pomortsev submitted at Feb 18, 2026 12:57
// Solution Runtime 4 ms Beats 100.00% Analyze Complexity Memory 65.75 MB Beats 47.83%

function sortMatrix(grid: number[][]): number[][] {
  if (grid.length === 1) return grid

  for (let i = 0; i < grid.length - 1; i++) {
    while (true) {
      let isChanged = false

      for (let j = 0; j < grid.length - 1; j++) {
        if (i + j + 1 < grid.length && grid[i + j][j] < grid[i + j + 1][j + 1]) {
          [grid[i + j][j], grid[i + j + 1][j + 1]] = [grid[i + j + 1][j + 1], grid[i + j][j]]
          isChanged = true
        }
      }

      if (!isChanged) break
    }
    if (i > 0) {
      while (true) {
        let isChanged = false

        for (let j = 0; j < grid.length - 1; j++) {
          if (i + j + 1 < grid.length && grid[j][i + j] > grid[j + 1][i + j + 1]) {
            [grid[j][i + j], grid[j + 1][i + j + 1]] = [grid[j + 1][i + j + 1], grid[j][i + j]]
            isChanged = true
          }
        }

        if (!isChanged) break
      }
    }
  }

  return grid
};