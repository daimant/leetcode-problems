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

// added more unreadable solution
// Accepted
// Runtime 81 ms Beats 80.46% of users with TypeScript
// Memory 55.11 MB Beats 75.86% of users with TypeScript

const modifiedMatrix2 = (matrix: number[][]): number[][] => {
  const maxOfCols = new Array(...matrix[0])
  const minusEls = []

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === -1) minusEls.push([i, j])
      else if (matrix[i][j] > maxOfCols[j]) maxOfCols[j] = matrix[i][j]
    }
  }

  for (let i = 0; i < minusEls.length; i++) {
    matrix[minusEls[i][0]][minusEls[i][1]] = maxOfCols[minusEls[i][1]]
  }

  return matrix
}