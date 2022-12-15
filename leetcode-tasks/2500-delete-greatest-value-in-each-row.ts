// Runtime 75 ms Beats 100% Memory 46 MB Beats 100%
// mutable

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

// Runtime 70 ms Beats 100% Memory 45.2 MB Beats 68.97%
// immutable

const deleteGreatestValue2 = (grid: number[][]): number => {
  let result = 0

  grid.forEach(el => el.sort((a, b) => a - b))

  for (let j = 0; j < grid[0].length; j++) {
    let currMaxValue = 0

    for (let i = 0; i < grid.length; i++) {
      if (currMaxValue < grid[i][j]) currMaxValue = grid[i][j]
    }

    result += currMaxValue
  }

  return result
}
