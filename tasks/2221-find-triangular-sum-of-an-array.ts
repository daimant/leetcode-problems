// Accepted 300 / 300 testcases passed Sergey Pomortsev submitted at Feb 26, 2026 14:28
// Solution Runtime 34 ms Beats 96.88% Analyze Complexity Memory 57.81 MB Beats 84.38%

function triangularSum(nums: number[]): number {
  while (nums.length > 1) {
    for (let i = 0; i < nums.length - 1; i++) {
      nums[i] = (nums[i] + nums[i + 1]) % 10
    }

    nums.pop()
  }

  return nums[0]
};