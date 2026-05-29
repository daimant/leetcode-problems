// Accepted 962 / 962 testcases passed Sergey Pomortsev submitted at Mar 01, 2026 15:30
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 57.92 MB Beats 70.00%

function maxAdjacentDistance(nums: number[]): number {
  let max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    const curr = Math.abs(nums[i] - (nums[i + 1] !== undefined ? nums[i + 1] : nums[0]));
    if (max < curr) max = curr;
  }

  return max;
};