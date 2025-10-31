//  Runtime: 80 ms, faster than 100.00% of TypeScript online submissions for Number of Unequal Triplets in Array.
//  Memory Usage: 43.2 MB, less than 100.00% of TypeScript online submissions for Number of Unequal Triplets in Array.

const unequalTriplets = (nums: number[]): number => {
  let count = 0

  for (let a = 0; a < nums.length; a++) {
    for (let b = a + 1; b < nums.length; b++) {
      for (let c = a + 2; c < nums.length; c++) {
        if (nums[a] !== nums[b] && nums[b] !== nums[c] && nums[c] !== nums[a] && a < b && b < c) count++
      }
    }
  }

  return count
}
