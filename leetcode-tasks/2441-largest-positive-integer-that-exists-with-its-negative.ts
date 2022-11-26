// Runtime: 73 ms, faster than 98.82% of TypeScript online submissions for Largest Positive Integer That Exists With Its Negative.
// Memory Usage: 45.7 MB, less than 67.06% of TypeScript online submissions for Largest Positive Integer That Exists With Its Negative.

const findMaxK = (nums: number[]): number => {
  const set = new Set(nums)
  let max = -1

  nums.forEach((num) => {
    if (set.has(num * -1) && num > max) max = num
  })

  return max
};
