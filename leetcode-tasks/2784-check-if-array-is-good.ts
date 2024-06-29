// Accepted
// Runtime 53 ms Beats 84.21%
// Memory 51.82 MB Beats 94.74%

const isGood = (nums: number[]): boolean => {
  const max = Math.max(...nums)

  return new Set(nums).size === nums.length - 1
    && nums.indexOf(max) !== nums.lastIndexOf(max)
    && nums.length - 1 === max
}
