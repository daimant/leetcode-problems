// Accepted
// Runtime 55 ms Beats 81.82% of users with TypeScript
// Memory 51.54 MB Beats 77.27% of users with TypeScript

const maxOperations = (nums: number[]): number => {
  const target = nums[0] + nums[1]
  let result = 1

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] + nums[i + 1] !== target) break
    result++
    i++
  }

  return result
};