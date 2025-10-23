// Accepted 755 / 755 testcases passed Sergey Pomortsev submitted at Oct 21, 2025 17:34
// Solution Runtime 1 ms Beats 94.57% Analyze Complexity Memory 57.34 MB Beats 93.48%

const sumDivisibleByK = (nums: number[], k: number): number => {
  const freqs = new Map<number, number>()

  nums.forEach((num: number) => {
    freqs.set(num, (freqs.get(num) || 0) + 1)
  })

  return Array.from(freqs).reduce((acc, curr) => curr[1] % k === 0 ? acc + curr[0] * curr[1] : acc, 0)
};