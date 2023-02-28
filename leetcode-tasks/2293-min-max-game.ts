// Runtime 45 ms Beats 100% Memory 44.8 MB Beats 80%

const minMaxGame = (nums: number[]): number => {
  if (nums.length === 1) return nums[0]

  const arrLength = nums.length / 2

  for (let i = 0; i < arrLength; i++) {
    nums.splice(i, 2, i % 2 ? Math.min(nums[i], nums[i + 1]) : Math.max(nums[i], nums[i + 1]))
  }

  return minMaxGame(nums)
}
