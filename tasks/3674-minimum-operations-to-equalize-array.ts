// Accepted 989 / 989 testcases passed Sergey Pomortsev submitted at Oct 25, 2025 14:38
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 56.24 MB Beats 92.13%

const minOperations4 = (nums: number[]): number => {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1]) return 1
  }
  return 0
}

// Added one-line solution
// Accepted 989 / 989 testcases passed Sergey Pomortsev submitted at Oct 25, 2025 14:41
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 58.05 MB Beats 38.20%

const minOperations5 = (nums: number[]): number => new Set(nums).size === 1 ? 0 : 1