const distinctAverages = (nums: number[]): number => {
  const set = new Set()

  nums.sort((a, b) => a - b).forEach((el, i) => {
    if (i <= nums.length / 2) {
      set.add((el + nums[nums.length - 1 - i]) / 2)
    }
  })

  return set.size
}
