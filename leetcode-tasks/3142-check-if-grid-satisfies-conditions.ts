// Accepted
// Runtime 67 ms Beats 65.91% of users with TypeScript
// Memory 51.60 MB Beats 100.00% of users with TypeScript

const satisfiesConditions = (grid: number[][]): boolean => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length - 1; j++) {
      if (grid[i][j] === grid[i][j + 1]) return false
    }
  }

  for (let i = 0; i < grid[0].length; i++) {
    for (let j = 0; j < grid.length - 1; j++) {
      if (grid[j][i] !== grid[j + 1][i]) return false
    }
  }

  return true
}

// optimized
// Accepted
// Runtime 62 ms Beats 79.55% of users with TypeScript
// Memory 51.82 MB Beats 86.36% of users with TypeScript
const satisfiesConditions2 = (grid: number[][]): boolean => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (j < grid[i].length && grid[i][j] === grid[i][j + 1] || i < grid.length - 1 && grid[i][j] !== grid[i + 1][j]) return false
    }
  }

  return true
}
