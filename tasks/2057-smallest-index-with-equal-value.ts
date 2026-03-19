// Accepted 663 / 663 testcases passed Sergey Pomortsev submitted at Mar 04, 2026 15:58
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 57.92 MB Beats 53.85%

function smallestEqual(nums: number[]): number {
  for (let i = 0; i < nums[i]; i++) {
    if (i % 10 === nums[i]) return i;
  }

  return -1;
};