// Accepted 994 / 994 testcases passed Sergey Pomortsev submitted at Dec 18, 2025 09:50
// Solution Runtime 1 ms Beats 98.68% Analyze Complexity Memory 58.89 MB Beats 18.42%

function absDifference(nums: number[], k: number): number {
  nums = nums.sort((a, b) => a - b)
  const smallestSum = nums.slice(0, k).reduce((acc, curr) => acc + curr, 0)
  const biggestSum = nums.slice(nums.length - k).reduce((acc, curr) => acc + curr, 0)

  return Math.abs(smallestSum - biggestSum)
};