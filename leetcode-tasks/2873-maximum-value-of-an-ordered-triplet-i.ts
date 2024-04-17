// Accepted
// Runtime 61 ms Beats 77.27% of users with TypeScript
// Memory 51.96 MB Beats 50.00% of users with TypeScript

const maximumTripletValue = (nums: number[]): number => {
  let result = 0

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if ((nums[i] - nums[j]) * nums[k] > result) result = (nums[i] - nums[j]) * nums[k]
      }
    }
  }

  return result
}