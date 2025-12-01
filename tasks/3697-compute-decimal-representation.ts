// Accepted 1000 / 1000 testcases passed Sergey Pomortsev submitted at Oct 23, 2025 15:20
// Solution Runtime 1 ms Beats 94.57% Analyze Complexity Memory 58.78 MB Beats 58.14%

const decimalRepresentation = (n: number): number[] => String(n).split('').reduce((acc, curr, i, arr) => {
  const currNum = Number(curr) * (10 ** (arr.length - i - 1))
  return currNum ? acc.concat(currNum) : acc
}, [])