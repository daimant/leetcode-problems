// Accepted
// Runtime 50 ms Beats 94.74% of users with TypeScript
// Memory 52.03 MB Beats 35.09% of users with TypeScript

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