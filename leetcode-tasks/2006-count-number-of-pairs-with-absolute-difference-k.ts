// Runtime 63 ms Beats 100% Memory 44 MB Beats 100%

const countKDifference = (nums: number[], k: number): number => {
  let result = 0

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] - nums[j] === k || nums[j] - nums[i] === k) result++
    }
  }

  return result
}
