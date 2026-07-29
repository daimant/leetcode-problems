// Accepted 1000 / 1000 testcases passed Sergey Pomortsev submitted at Jun 03, 2026 23:03
// Solution Runtime 0 ms Beats 100.00% Memory 57.19 MB Beats 98.68%

function minimumSwaps(nums: number[]): number {
  let zeroCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) zeroCount++;
  }

  if (zeroCount === nums.length) return 0;

  let count = 0;

  for (let i = nums.length - 1; i >= nums.length - zeroCount; i--) {
    if (nums[i] !== 0) count++;
  }

  return count;
};