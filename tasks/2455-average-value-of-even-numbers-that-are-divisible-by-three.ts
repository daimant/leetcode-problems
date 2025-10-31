// Runtime: 66 ms, faster than 98.41% of TypeScript online submissions for Average Value of Even Numbers That Are Divisible by Three.
// Memory Usage: 44.4 MB, less than 93.65% of TypeScript online submissions for Average Value of Even Numbers That Are Divisible by Three.

const averageValue = (nums: number[], countEven = 0): number => Math.trunc(nums.reduce((acc, curr) => {
  if (!(curr % 2) && !(curr % 3)) {
    countEven++
    return acc + curr
  } else return acc
}, 0) / countEven || 0)

// Runtime: 72 ms, faster than 88.89% of TypeScript online submissions for Average Value of Even Numbers That Are Divisible by Three.
// Memory Usage: 45 MB, less than 49.21% of TypeScript online submissions for Average Value of Even Numbers That Are Divisible by Three.

const averageValue2 = (nums: number[]): number => {
  let countEven = 0

  return Math.trunc(nums.reduce((acc, curr) => {
    if (!(curr % 2) && !(curr % 3)) {
      countEven++
      return acc + curr
    } else return acc
  }, 0) / countEven) || 0
}
