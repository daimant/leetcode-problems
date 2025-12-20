// Accepted 871 / 871 testcases passed Sergey Pomortsev submitted at Nov 18, 2025 18:41
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 57.85 MB Beats 42.11%

const isTrionic = (nums: number[]): boolean => {
  if (nums.length < 4) return false

  let breakA = 0
  let breakB = 0
  let currSubarr = 0

  for (let i = 0; i < nums.length - 1; i++) {
    if (currSubarr === 0) {
      if (nums[i] < nums[i + 1]) breakA++
      else if (breakA) {
        currSubarr = 1
        i--
      } else return false
    } else if (currSubarr === 1) {
      if (nums[i] > nums[i + 1]) breakB++
      else if (breakB) {
        currSubarr = 2
        i--
      } else return false
    } else if (nums[i] >= nums[i + 1]) return false
  }

  return currSubarr === 2
}