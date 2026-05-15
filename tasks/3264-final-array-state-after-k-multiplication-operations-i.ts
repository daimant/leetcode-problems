// Accepted 737 / 737 testcases passed Sergey Pomortsev submitted at Feb 05, 2026 18:05
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 59.27 MB Beats 28.33%

function getFinalState(nums: number[], k: number, multiplier: number): number[] {
  while (k) {
    let currMin = Infinity
    let currMinIndex = -1

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] < currMin) {
        currMin = nums[i]
        currMinIndex = i
      }
    }

    nums[currMinIndex] *= multiplier
    k--
  }

  return nums
};