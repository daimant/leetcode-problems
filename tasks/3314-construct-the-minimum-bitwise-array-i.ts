// Accepted 658 / 658 testcases passed Sergey Pomortsev submitted at Feb 16, 2026 23:43
// Solution Runtime 2 ms Beats 63.31% Analyze Complexity Memory 61.76 MB Beats 5.84%

function minBitwiseArray(nums: number[]): number[] {
  const map = new Map()
  const result = []
  const maxCheck = Math.max(...nums)

  for (let i = 1; i < maxCheck; i++) {
    const curr = i | i + 1
    if (!map.has(curr)) map.set(curr, i)
  }

  for (let i = 0; i < nums.length; i++) {
    result.push(map.get(nums[i]) || -1)
  }

  return result
};