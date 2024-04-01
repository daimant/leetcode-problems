// Accepted
// Runtime 46 ms Beats 100.00% of users with TypeScript
// Memory 51.92 MB Beats 100.00% of users with TypeScript

const minimumSubarrayLength = (nums: number[], k: number): number => {
  let result = Infinity

  for (let i = 0; i < nums.length; i++) {
    let or = nums[i]

    if (or >= k && result > 1) result = 1

    for (let j = i + 1; j < nums.length; j++) {
      or = or | nums[j]
      if (or >= k && result > j - i + 1) result = j - i + 1
    }
  }

  return result === Infinity ? -1 : result
}