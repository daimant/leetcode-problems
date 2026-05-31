// Accepted 616 / 616 testcases passed Sergey Pomortsev submitted at Feb 17, 2026 15:13
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 57.96 MB Beats 44.44%

function countPartitions(nums: number[]): number {
  let leftSum = 0
  let rightSum = nums.reduce((acc, curr) => acc + curr, 0)
  let evenCount = 0

  for (let i = 0; i < nums.length - 1; i++) {
    leftSum += nums[i]
    rightSum -= nums[i]

    if ((leftSum - rightSum) % 2 === 0) evenCount++
  }

  return evenCount
};