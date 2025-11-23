// Accepted 1000 / 1000 testcases passed Sergey Pomortsev submitted at Oct 22, 2025 20:44
// Solution Runtime 1 ms Beats 88.57% Analyze Complexity Memory 57.66 MB Beats 91.43%

const scoreBalance = (s: string): boolean => {
  const sArr = s.split('')
  const sumSymbols = sArr.map(symb => symb.charCodeAt(0) - 96).reduce((acc, curr) => acc + curr, 0)
  let currSymbSum = 0
  let result = false

  sArr.forEach(symb => {
    if (currSymbSum < sumSymbols) {
      currSymbSum += symb.charCodeAt(0) - 96
      if (currSymbSum === sumSymbols - currSymbSum) result = true
    }
  })

  return result
}
