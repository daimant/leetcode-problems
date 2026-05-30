// Accepted 773 / 773 testcases passed Sergey Pomortsev submitted at Feb 15, 2026 13:30
// Solution Runtime 1 ms Beats 82.93% Analyze Complexity Memory 60.34 MB Beats 12.20%

function subarraySum(nums: number[]): number {
  let result = nums[0]

  for (let i = 1; i < nums.length; i++) {
    const currSub = nums.slice(Math.max(0, i - nums[i]), i + 1)
    result += currSub.reduce((acc, curr) => acc + curr, 0)
  }

  return result
};