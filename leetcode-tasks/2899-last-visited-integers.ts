// Accepted
// Runtime 65 ms Beats 87.50% of users with TypeScript
// Memory 52.43 MB Beats 93.75% of users with TypeScript

const lastVisitedIntegers = (nums: number[]): number[] => {
  const seen = []
  const ans = []
  let k = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === -1) {
      k++
      ans.push(seen.length >= k ? seen[k - 1] : -1)
    } else {
      k = 0
      seen.unshift(nums[i])
    }
  }

  return ans
}

// optimized
// Accepted
// Runtime 66 ms Beats 81.25% of users with TypeScript
// Memory 52.79 MB Beats 93.75% of users with TypeScript

const lastVisitedIntegers2 = (nums: number[]): number[] => {
  const seen = []
  const ans = []
  let k = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === -1) {
      k++
      ans.push(seen.length >= k ? seen[seen.length - k] : -1)
    } else {
      k = 0
      seen.push(nums[i])
    }
  }

  return ans
}
