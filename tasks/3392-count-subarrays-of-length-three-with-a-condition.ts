// Accepted 1691 / 1691 testcases passed Sergey Pomortsev submitted at Jun 30, 2026 18:30
// Runtime 1 ms Beats 100.00% Memory 58.62 MB Beats 14.29%

function countSubarrays(nums: number[]): number {
  let count = 0;

  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i - 1] + nums[i + 1] === nums[i] / 2) count++;
  }

  return count;
};