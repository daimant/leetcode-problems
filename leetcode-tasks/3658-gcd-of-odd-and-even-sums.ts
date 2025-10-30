// Accepted 1000 / 1000 testcases passed Sergey Pomortsev submitted at Oct 26, 2025 12:01
// Solution Runtime 9 ms Beats 18.37% Analyze Complexity Memory 60.30 MB Beats 5.10%

const gcdOfOddEvenSums = (n: number): number => {
  const [oddSum, evenSum] = new Array(n * 2).fill(1).reduce((acc, _, i) => (i + 1) % 2 ? [acc[0] + i + 1, acc[1]] : [acc[0], acc[1] + i + 1], [0, 0])

  for (let i = Math.min(oddSum, evenSum); i > 0; i--) {
    if (oddSum % i === 0 && evenSum % i === 0) return i
  }

  return 1
}

// Added optimized solution
// Accepted 1000 / 1000 testcases passed Sergey Pomortsev submitted at Oct 26, 2025 15:45
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 55.60 MB Beats 96.94%

const gcdOfOddEvenSums2 = (n: number): number => n