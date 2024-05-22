// Accepted
// Runtime 59 ms Beats 91.80% of users with TypeScript
// Memory 52.03 MB Beats 49.18% of users with TypeScript

const isArraySpecial = (nums: number[]): boolean => {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] % 2 === 0 && nums[i + 1] % 2 === 0 || nums[i] % 2 !== 0 && nums[i + 1] % 2 !== 0) return false
  }

  return true
}
