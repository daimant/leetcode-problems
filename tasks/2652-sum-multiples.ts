// Accepted 1000 / 1000 testcases passed Sergey Pomortsev submitted at Feb 13, 2026 14:05
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 56.94 MB Beats 80.00%

function sumOfMultiples(n: number): number {
  let result = 0

  for (let i = 3; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) result += i
  }

  return result
};