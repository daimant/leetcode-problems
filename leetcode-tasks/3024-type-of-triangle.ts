// Accepted
// Runtime 54 ms Beats 93.26% of users with TypeScript
// Memory 51.96 MB Beats 50.56% of users with TypeScript

const triangleType = (nums: number[]): string => {
  if (nums[0] === nums[1] && nums[1] === nums[2]) return 'equilateral'
  else if (nums[0] + nums[1] <= nums[2] || nums[1] + nums[2] <= nums[0] || nums[0] + nums[2] <= nums[1]) return 'none'
  else if (nums[0] === nums[1] || nums[1] === nums[2] || nums[0] === nums[2]) return 'isosceles'
  else return 'scalene'
}