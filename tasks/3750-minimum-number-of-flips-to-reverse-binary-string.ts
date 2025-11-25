// Accepted 1146 / 1146 testcases passed Sergey Pomortsev submitted at Nov 23, 2025 12:01
// Solution 0 ms Beats 100.00% Analyze Complexity Memory 58.21 MB Beats 100.00%

const minimumFlips = (n: number): number => {
  let count = 0
  const binN = n.toString(2)
  const revN = binN.split('').reverse()

  revN.forEach((el, i) => {
    if (binN[i] !== el) count++
  })

  return count
}