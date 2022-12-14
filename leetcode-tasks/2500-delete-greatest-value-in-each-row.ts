// Runtime 75 ms Beats 100% Memory 46 MB Beats 100%

const deleteGreatestValue = (grid: number[][]): number => {
  let result = 0

  grid.forEach(el => el.sort((a, b) => a - b))

  while (grid[grid.length - 1].length !== 0) {
    const currMaxValues = []

    for (let i = 0; i < grid.length; i++) {
      currMaxValues.push(grid[i].pop())
    }

    result += Math.max(...currMaxValues)
  }

  return result
}
