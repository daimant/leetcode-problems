// Accepted 54 / 54 testcases passed Sergey Pomortsev submitted at Mar 31, 2026 19:56
// Solution Runtime 4 ms Beats 40.00% Memory 55.91 MB Beats 25.00%

function maximumDifference(nums: number[]): number {
  let result = -1;

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i] && result < nums[j] - nums[i]) result = nums[j] - nums[i];
    }
  }

  return result;
};