// Accepted 861 / 861 testcases passed Sergey Pomortsev submitted at Mar 01, 2026 14:04
// Solution Runtime 1 ms Beats 86.67% Analyze Complexity Memory 57.61 MB Beats 93.33%

function maximumStrongPairXor(nums: number[]): number {
  let max = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) <= Math.min(nums[i], nums[j]) && (nums[i] ^ nums[j]) > max) max = nums[i] ^ nums[j];
    }
  }

  return max;
};