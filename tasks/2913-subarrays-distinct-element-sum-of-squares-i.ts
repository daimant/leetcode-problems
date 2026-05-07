// Accepted 707 / 707 testcases passed Sergey Pomortsev submitted at Feb 24, 2026 12:54
// Solution Runtime 3 ms Beats 100.00% Analyze Complexity Memory 62.19 MB Beats 21.43%

function sumCounts(nums: number[]): number {
  let result = nums.length
  for (let i = 0; i < nums.length; i++) {
    let uniq = new Set<number>([nums[i]])

    for (let j = i + 1; j < nums.length; j++) {
      uniq.add(nums[j])
      result += uniq.size ** 2
    }
  }

  return result
};