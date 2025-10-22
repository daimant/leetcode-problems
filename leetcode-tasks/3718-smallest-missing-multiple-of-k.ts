// Accepted 664 / 664 testcases passed submitted at Oct 21, 2025 17:18
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 57.62 MB Beats 88.89%

const missingMultiple = (nums: number[], k: number): number => {
  const numsSet = new Set(nums)

  for (let i = k; true; i += k) {
    if (!numsSet.has(i)) return i
  }
};