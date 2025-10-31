// elegant solution Runtime: 79 ms Memory Usage: 42.5 MB
const distinctAverages = (nums: number[]): number => {
  const set = new Set()

  nums.sort((a, b) => a - b).forEach((el, i) => {
    if (i <= nums.length / 2) {
      set.add((el + nums[nums.length - 1 - i]) / 2)
    }
  })

  return set.size
}

// fastest solution
// Runtime: 64 ms, faster than 100.00% of TypeScript online submissions for Number of Distinct Averages.
// Memory Usage: 43.1 MB, less than 57.14% of TypeScript online submissions for Number of Distinct Averages.
const distinctAverages2 = (nums: number[]): number => {
  const set = new Set()

  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length / 2; i++) {
    set.add((nums[i] + nums[nums.length - 1 - i]) / 2)
  }

  return set.size
}
