// Accepted 118 / 118 testcases passed Sergey Pomortsev submitted at Mar 31, 2026 19:48
// Solution Runtime 6 ms Beats 97.22% Memory 57.62 MB Beats 86.11%

function minimumDifference(nums: number[], k: number): number {
  let result = Number.MAX_SAFE_INTEGER;
  nums.sort((a, b) => b - a);

  for (let i = 0; i < nums.length - k + 1; i++) {
    if (result > nums[i] - nums[i + k - 1]) result = nums[i] - nums[i + k - 1];
  }
  return result;
};