// Runtime 55 ms Beats 92.86% Memory 43.5 MB Beats 50%

const findSubarrays = (nums: number[]): boolean => {
  const set = new Set()

  for(let i = 0; i < nums.length - 1; i++) {
    if (set.has(nums[i] + nums[i + 1])) return true
    else set.add(nums[i] + nums[i + 1])
  }

  return false
}
