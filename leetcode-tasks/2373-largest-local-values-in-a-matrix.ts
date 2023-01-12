// Runtime 100 ms Beats 53.33% Memory 46.7 MB Beats 40%

const largestLocal = (grid: number[][]): number[][] => {
  const result = []
  for (let i = 0; i < grid.length - 2; i++) {
    result[i] = []

    for (let j = 0; j < grid[0].length - 2; j++) {
      result[i].push(Math.max(grid[i][j], grid[i][j + 1], grid[i][j + 2], grid[i + 1][j], grid[i + 1][j + 1], grid[i + 1][j + 2], grid[i + 2][j], grid[i + 2][j + 1], grid[i + 2][j + 2]))
    }
  }

  return result
}

// Runtime 72 ms Beats 100% Memory 47 MB Beats 33.33%

const largestLocal2 = (grid: number[][]): number[][] => {
  const result = []
  for (let i = 0; i < grid.length - 2; i++) {
    result[i] = []

    let maxA, maxB, maxC

    for (let j = 0; j < grid[0].length; j++) {
      if (!maxA) maxA = Math.max(grid[i][j], grid[i + 1][j], grid[i + 2][j])
      else if (!maxB) maxB = Math.max(grid[i][j], grid[i + 1][j], grid[i + 2][j])
      else {
        if (maxC) {
          maxA = maxB
          maxB = maxC
        }

        maxC = Math.max(grid[i][j], grid[i + 1][j], grid[i + 2][j])
        result[i].push(Math.max(maxA, maxB, maxC))
      }
    }
  }

  return result
}
