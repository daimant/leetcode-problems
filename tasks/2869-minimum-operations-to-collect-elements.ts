// Accepted
// Runtime 63 ms Beats 36.36%
// Memory 51.88 MB Beats 81.82%

const minOperations3 = (nums: number[], k: number): number => {
  const set = new Set()
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] <= k) set.add(nums[i])
    if (set.size === k) return nums.length - i
  }
}
