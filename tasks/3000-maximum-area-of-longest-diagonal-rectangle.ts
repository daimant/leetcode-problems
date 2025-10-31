// wrong solution

const areaOfMaxDiagonal = (dimensions: number[][]): number => dimensions
  .map(el => [Math.sqrt(el[0] * el[0] + el[1] * el[1]), el[0] * el[1]])
  .sort((a, b) => a[0] + a[1] < b[0] + b[1] ? 1 : -1)[0][1]

// Accepted
// Runtime 58 ms Beats 96.20% of users with TypeScript
// Memory 52.16 MB Beats 34.18% of users with TypeScript

const areaOfMaxDiagonal2 = (dimensions: number[][]): number => {
  let dict = []
  let maxDiagonal = 0
  let maxSquareWithMaxDiagonal = 0

  dimensions.forEach(el => {
    const diagonal = Math.sqrt(el[0] * el[0] + el[1] * el[1])
    const square = el[0] * el[1]

    if (diagonal > maxDiagonal) {
      maxDiagonal = diagonal
      dict = [[diagonal, square]]
      maxSquareWithMaxDiagonal = square
    } else if (diagonal === maxDiagonal) {
      if (maxSquareWithMaxDiagonal < square) maxSquareWithMaxDiagonal = square
      dict.push([diagonal, square])
    }
  })

  return maxSquareWithMaxDiagonal
}