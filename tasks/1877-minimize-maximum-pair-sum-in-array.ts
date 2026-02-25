// Accepted 37 / 37 testcases passed Sergey Pomortsev submitted at Feb 22, 2026 22:27
// Solution Runtime 267 ms Beats 50.97% Analyze Complexity Memory 70.84 MB Beats 48.87%

const minPairSum = (nums: number[]): number => {
  const arr = []
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length / 2; i++) {
    arr.push(nums[i] + nums[nums.length - 1 - i])
  }

  return Math.max(...arr)
}