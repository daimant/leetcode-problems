// Accepted
// Runtime 59 ms Beats 99.02% of users with TypeScript
// Memory 53.38 MB Beats 39.51% of users with TypeScript

const numberGame = (nums: number[]): number[] => {
  nums = nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i += 2) {
    [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]]
  }

  return nums
}