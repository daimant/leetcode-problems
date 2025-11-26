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

// Faster solution
// Accepted 1000 / 1000 testcases passed Sergey Pomortsev  submitted at Oct 22, 2025 20:52
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 58.21 MB Beats 55.71%

const scoreBalance2 = (s: string): boolean => {
  let sumSymbols = 0
  let currSymbSum = 0

  for (let i = 0; i < s.length; i++) {
    sumSymbols += s[i].charCodeAt(0) - 96
  }

  for (let i = 0; i < s.length; i++) {
    currSymbSum += s[i].charCodeAt(0) - 96
    if (currSymbSum === sumSymbols / 2) return true
    else if (currSymbSum > sumSymbols / 2) return false
  }
}