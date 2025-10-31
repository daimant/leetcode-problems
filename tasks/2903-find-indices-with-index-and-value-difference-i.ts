// wrong solution

const findIndices = (nums: number[], indexDifference: number, valueDifference: number): number[] => {
  for (let i = 0; i < nums.length - indexDifference; i++) {
    for (let j = i + indexDifference; j < nums.length; j++) {
      if (nums[i] === nums[j] + valueDifference || nums[i] === nums[j] - valueDifference) return [i, j]
    }
  }

  return [-1, -1]
}

// Accepted
// Runtime 56 ms Beats 83.33% of users with TypeScript
// Memory 52.17 MB Beats 16.67% of users with TypeScript

const findIndices2 = (nums: number[], indexDifference: number, valueDifference: number): number[] => {
  for (let i = 0; i < nums.length - indexDifference; i++) {
    for (let j = i + indexDifference; j < nums.length; j++) {
      if (Math.abs(Math.abs(nums[i]) - Math.abs(nums[j])) >= valueDifference) return [i, j]
    }
  }

  return [-1, -1]
}