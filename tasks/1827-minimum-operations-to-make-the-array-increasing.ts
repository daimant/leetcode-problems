// Runtime 57 ms Beats 97.6% Memory 45.1 MB Beats 32.35%

const minOperations = (nums: number[]): number => {
  let result = 0

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] >= nums[i + 1]) {
      const diff = nums[i] - nums[i + 1]
      result += diff + 1
      nums[i + 1] += diff + 1
    }
  }

  return result
}
