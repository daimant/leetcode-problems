// Accepted
// Runtime 48 ms Beats 95.77% of users with TypeScript
// Memory 51.82 MB Beats 57.75% of users with TypeScript

const missingInteger = (nums: number[]): number => {
  const unique = new Set(nums)
  let seqSum = nums[0]

  for (let i = 0; i < nums.length - 1 && nums[i] + 1 === nums[i + 1]; i++) {
    seqSum += nums[i + 1]
  }

  while (unique.has(seqSum)) {
    seqSum++
  }

  return seqSum
}