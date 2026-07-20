// Accepted 982 / 982 testcases passed Sergey Pomortsev submitted at Feb 24, 2026 12:42
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 56.81 MB Beats 100.00%

function smallestIndex(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    if (i === nums[i].toString().split('').reduce((acc, curr) => acc + +curr, 0)) return i
  }

  return -1
};