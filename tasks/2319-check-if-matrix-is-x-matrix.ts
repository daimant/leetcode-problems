// Runtime 58 ms Beats 100% Memory 45.7 MB Beats 60%

const checkXMatrix = (grid: number[][]): boolean => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (i === j || j === grid.length - 1 - i) {
        if (grid[i][j] === 0) return false
      } else if (grid[i][j] !== 0) return false
    }
  }
  return true
}
