// Accepted 96 / 96 testcases passed Sergey Pomortsev submitted at Feb 23, 2026 10:40
// Editorial  Solution Runtime 37 ms Beats 100.00% Analyze Complexity Memory 56.84 MB Beats 97.14%

function maxProductDifference(nums: number[]): number {
  let min = Infinity
  let min2 = Infinity
  let max = -Infinity
  let max2 = -Infinity

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
      min2 = min
      min = nums[i]
    } else if (nums[i] < min2) min2 = nums[i]

    if (nums[i] > max) {
      max2 = max
      max = nums[i]
    } else if (nums[i] > max2) max2 = nums[i]
  }

  return max * max2 - min * min2
};