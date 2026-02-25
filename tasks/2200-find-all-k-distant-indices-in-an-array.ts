// Accepted 87 / 87 testcases passed Sergey Pomortsev submitted at Feb 25, 2026 18:40
// Solution Runtime 39 ms Beats 30.00% Analyze Complexity Memory 58.54 MB Beats 85.00%

function findKDistantIndices(nums: number[], key: number, k: number): number[] {
  const keys = []
  const result = new Set<number>()

  nums.forEach((el, i) => {
    if (el === key) keys.push(i)
  })

  keys.forEach(el => {
    const start = el - k >= 0 ? el - k : 0
    const end = el + k < nums.length ? el + k : nums.length - 1

    for (let i = start; i <= end; i++) {
      result.add(i)
    }
  })

  return Array.from(result)
};