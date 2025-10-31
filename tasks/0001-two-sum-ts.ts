// Accepted
// Runtime 98 ms Beats 39.90% of users with TypeScript
// Memory 51.60 MB Beats 97.20% of users with TypeScript

const twoSum2 = (nums: number[], target: number): number[] => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j]
    }
  }
}
