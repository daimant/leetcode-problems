// Accepted 1035 / 1035 testcases passed Sergey Pomortsev submitted at Feb 11, 2026 12:04
// Solution Runtime 2 ms Beats 100.00% Analyze Complexity Memory 63.96 MB Beats 46.15%

function findMatrix(nums: number[]): number[][] {
  const result = []

  outer: for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < result.length; j++) {
      if (!result[j].has(nums[i])) {
        result[j].add(nums[i])
        continue outer
      }
    }
    result.push(new Set([nums[i]]))
  }

  return result.map(el => Array.from(el))
};