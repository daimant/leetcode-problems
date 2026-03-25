// Accepted 137 / 137 testcases passed Sergey Pomortsev submitted at Feb 24, 2026 21:44
// Solution Runtime 2 ms Beats 100.00% Analyze Complexity Memory 58.58 MB Beats 42.86%

function divideArray(nums: number[]): boolean {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1 : 1)
  }

  return Array.from(map.values()).every(el => el % 2 === 0)
};