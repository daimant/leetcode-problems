// Accepted
// Runtime 50 ms Beats 98.77% of users with TypeScript
// Memory 51.60 MB Beats 77.78% of users with TypeScript

const canMakeSquare = (grid: string[][]): boolean => {
  const arr = [
    [grid[0][0], grid[0][1], grid[1][0], grid[1][1]],
    [grid[0][1], grid[0][2], grid[1][1], grid[1][2]],
    [grid[1][0], grid[1][1], grid[2][0], grid[2][1]],
    [grid[1][1], grid[1][2], grid[2][1], grid[2][2]],
  ]

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].filter(el => el === 'W').length >= 3 || arr[i].filter(el => el === 'B').length >= 3) return true
  }

  return false
}
