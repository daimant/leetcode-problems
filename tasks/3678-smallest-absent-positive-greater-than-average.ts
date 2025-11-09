// Accepted 3500 / 3500 testcases passed Sergey Pomortsev submitted at Oct 24, 2025 14:52
// Solution Runtime 6 ms Beats 68.82% Analyze Complexity Memory 65.53 MB Beats 7.53%

const smallestAbsent = (nums: number[]): number => {
  const uniq = new Set(nums)
  const div = nums.reduce((acc, curr) => acc + curr, 0) / nums.length

  for (let i = div > 0 ? Math.trunc(div) + 1 : 1; true; i++) {
    if (!uniq.has(i)) return i
  }
};
