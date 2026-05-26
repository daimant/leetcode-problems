// Accepted 868 / 868 testcases passed Sergey Pomortsev submitted at Feb 23, 2026 10:55
// Solution Runtime 1 ms Beats 72.97% Analyze Complexity Memory 57.69 MB Beats 86.49%

const isBalanced = (num: string): boolean => num.split('').filter((_, i) => i % 2).reduce((acc, curr) => acc + +curr, 0) === num.split('').filter((_, i) => i % 2 === 0).reduce((acc, curr) => acc + +curr, 0)

// optimized
// Accepted 868 / 868 testcases passed Sergey Pomortsev submitted at Feb 23, 2026 10:59
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 57.92 MB Beats 62.16%

const isBalanced = (num: string): boolean => {
  let evenSum = 0
  let oddSum = 0

  for (let i = 0; i < num.length; i++) {
    if (i % 2) oddSum += +num[i]
    else evenSum += +num[i]
  }

  return evenSum === oddSum
}