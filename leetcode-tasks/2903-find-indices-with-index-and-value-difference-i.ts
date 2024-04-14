// wrong solution

const findIndices = (nums: number[], indexDifference: number, valueDifference: number): number[] => {
  for (let i = 0; i < nums.length - indexDifference; i++) {
    for (let j = i + indexDifference; j < nums.length; j++) {
      if (nums[i] === nums[j] + valueDifference || nums[i] === nums[j] - valueDifference) return [i, j]
    }
  }

  return [-1, -1]
}