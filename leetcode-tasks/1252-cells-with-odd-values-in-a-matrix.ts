// Runtime 52 ms Beats 100% Memory 45 MB Beats 50%

const oddCells = (m: number, n: number, indices: number[][]): number => {
  const matrix = []

  for (let i = 0; i < m; i++) {
    const currRow = []
    for (let j = 0; j < n; j++) currRow.push(0)
    matrix.push(currRow)
  }

  while (indices.length) {
    const [row, col] = indices.pop()

    for (let i = 0; i < matrix[row].length; i++) matrix[row][i]++
    for (let j = 0; j < matrix.length; j++) matrix[j][col]++
  }

  return matrix.flat().reduce((acc, curr) => curr % 2 ? acc + 1 : acc, 0)
}
