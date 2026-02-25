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

// added unoptimized solution
// Accepted 87 / 87 testcases passed Sergey Pomortsev submitted at Feb 25, 2026 18:48
// Solution Runtime 62 ms Beats 10.00% Analyze Complexity Memory 59.27 MB Beats 55.00%

function findKDistantIndices(nums: number[], key: number, k: number): number[] {
  const result = new Set<number>()

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === key) {
      result.add(i)
      for (let j = 1; j <= k; j++) {
        if (i + j < nums.length) result.add(i + j)
        if (i - j >= 0) result.add(i - j)
      }
    }
  }

  return Array.from(result).sort((a, b) => a - b)
};