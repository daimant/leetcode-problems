// Accepted 882 / 882 testcases passed Sergey Pomortsev submitted at Oct 22, 2025 22:02
// Solution Runtime 1 ms Beats 98.44% Analyze Complexity Memory 68.10 MB Beats 81.25%

const longestSubarray = (nums: number[]): number => {
  let result = 0
  let count = 0

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] === nums[i - 1] + (nums[i - 2] ?? 0)) {
      count = count + (i === 1 ? 2 : count ? 1 : 3)
    }
    else count = 0

    if (count > result) result = count
  }

  return result || 2
};