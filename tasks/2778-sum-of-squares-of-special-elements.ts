// Accepted
// Runtime 55 ms Beats 100.00%
// Memory 54.43 MB Beats 39.62%

const sumOfSquares = (nums: number[]): number => {
  let result = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums.length % (i + 1) === 0) result += nums[i] ** 2
  }

  return result
}
