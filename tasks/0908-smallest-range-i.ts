// Accepted 68 / 68 testcases passed Sergey Pomortsev submitted at Mar 04, 2026 11:25
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 56.28 MB Beats 92.86%

function smallestRangeI(nums: number[], k: number): number {
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) min = nums[i];
    if (nums[i] > max) max = nums[i];
  }

  return max - min <= k * 2 ? 0 : (max - k) - (min + k);
};