const semiOrderedPermutation = (nums: number[]): number => {
  let min = Infinity
  let minI: number
  let max = -Infinity
  let maxI: number

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i]
      maxI = i
    }
    if (nums[i] < min) {
      min = nums[i]
      minI = i
    }
  }

  return (minI + nums.length - maxI - 1) - (minI > maxI ? 1 : 0)
}
