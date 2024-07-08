
// Accepted
// Runtime 109 ms Beats 97.92%
// Memory 60.12 MB Beats 54.17%

const findNonMinOrMax = (nums: number[]): number => {
  let min = Math.min(...nums)
  let max = Math.max(...nums)

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > min && nums[i] < max) return nums[i]
  }

  return -1
}
