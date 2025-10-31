// Runtime 97 ms Beats 65.67% Memory 43.3 MB Beats 77.61%

const arithmeticTriplets = (nums: number[], diff: number): number => {
  let result = 0

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[k] - nums[j] === diff && nums[j] - nums[i] === diff) result++
      }
    }
  }

  return result
}

// Runtime 67 ms Beats 94.3% Memory 43.5 MB Beats 73.13%

const arithmeticTriplets2 = (nums: number[], diff: number): number => {
  let result = 0

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      if (nums[j] - nums[i] !== diff) continue

      for (let k = j + 1; k < nums.length; k++) {
        if (nums[k] - nums[j] === diff && nums[j] - nums[i] === diff) result++
      }
    }
  }

  return result
}
