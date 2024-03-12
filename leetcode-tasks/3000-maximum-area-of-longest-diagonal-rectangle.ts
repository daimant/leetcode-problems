// wrong solution

const areaOfMaxDiagonal = (dimensions: number[][]): number => dimensions
  .map(el => [Math.sqrt(el[0] * el[0] + el[1] * el[1]), el[0] * el[1]])
  .sort((a, b) => a[0] + a[1] < b[0] + b[1] ? 1 : -1)[0][1]