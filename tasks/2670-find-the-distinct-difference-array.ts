// Accepted 4512 / 4512 testcases passed Sergey Pomortsev submitted at Feb 25, 2026 20:54
// Solution Runtime 9 ms Beats 95.00% Analyze Complexity Memory 66.86 MB Beats 15.00%

function distinctDifferenceArray(nums: number[]): number[] {
  const result = []
  const prefUniq = new Set<number>()
  const sufUniq = new Set<number>(nums)
  const sufMap = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    sufMap.set(nums[i], sufMap.has(nums[i]) ? sufMap.get(nums[i]) + 1 : 1)
  }

  for (let i = 0; i < nums.length; i++) {
    prefUniq.add(nums[i])
    if (sufMap.get(nums[i]) > 1) sufMap.set(nums[i], sufMap.get(nums[i]) - 1)
    else {
      sufMap.delete(nums[i])
      sufUniq.delete(nums[i])
    }

    result.push(prefUniq.size - sufUniq.size)
  }

  return result
};