// Accepted
// Runtime 76 ms Beats 94.25% of users with TypeScript
// Memory 55.77 MB Beats 57.47% of users with TypeScript

const modifiedMatrix = (matrix: number[][]): number[][] => {
  const maxOfCols = new Array(matrix[0].length).fill(0)
  const minusEls = []

  matrix.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (cell === -1) minusEls.push([i, j])
      else if (cell > maxOfCols[j]) maxOfCols[j] = cell
    })
  })

  minusEls.forEach(el => {
    matrix[el[0]][el[1]] = maxOfCols[el[1]]
  })

  return matrix
}
