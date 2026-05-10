// Accepted 720 / 720 testcases passed Sergey Pomortsev submitted at Feb 17, 2026 15:05
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 58.24 MB Beats 25.58 %

function minimumAverage(nums: number[]): number {
  const result = []
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length / 2; i++) {
    result.push((nums[i] + nums[nums.length - 1 - i]) / 2)
  }

  return Math.min(...result)
};