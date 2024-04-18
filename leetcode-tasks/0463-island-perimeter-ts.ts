// Accepted
// Runtime 120 ms Beats 87.41% of users with TypeScript
// Memory 59.77 MB Beats 44.44% of users with TypeScript

const islandPerimeter = (grid: number[][]): number => {
  const xLen = grid.length
  const yLen = grid[0].length
  let count = 0

  for (let x = 0; x < xLen; x++) {
    for (let y = 0; y < yLen; y++) {
      if (grid[x][y] && ( !grid[x - 1] || ( x > 0 && !grid[x - 1][y] ) )) count++
      if (grid[x][y] && ( !grid[x + 1] || ( x < xLen - 1 && !grid[x + 1][y] ) )) count++
      if (grid[x][y] && ( !grid[x][y - 1] || ( y > 0 && !grid[x][y - 1] ) )) count++
      if (grid[x][y] && ( !grid[x][y + 1] || ( y < yLen - 1 && !grid[x][y + 1] ) )) count++
    }
  }

  return count
}