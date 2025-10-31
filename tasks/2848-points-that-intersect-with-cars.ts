// Accepted
// Runtime 53 ms Beats 100.00% of users with TypeScript
// Memory 52.25 MB Beats 81.82% of users with TypeScript

const numberOfPoints = (nums: number[][]): number => {
  const result = new Set()

  for (let i = 0; i < nums.length; i++) {
    for (let j = nums[i][0]; j <= nums[i][1]; j++) {
      result.add(j)
    }
  }

  return result.size
}