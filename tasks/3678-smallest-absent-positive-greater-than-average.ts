// Accepted 3500 / 3500 testcases passed Sergey Pomortsev submitted at Oct 24, 2025 14:52
// Solution Runtime 6 ms Beats 68.82% Analyze Complexity Memory 65.53 MB Beats 7.53%

const smallestAbsent = (nums: number[]): number => {
  const uniq = new Set(nums)
  const div = nums.reduce((acc, curr) => acc + curr, 0) / nums.length

  for (let i = div > 0 ? Math.trunc(div) + 1 : 1; true; i++) {
    if (!uniq.has(i)) return i
  }
};

// Added faster solution
// Accepted 3500 / 3500 testcases passed Sergey Pomortsev submitted at Oct 24, 2025 14:56
// Solution Runtime 5 ms Beats 77.42% Analyze Complexity Memory 64.49 MB Beats 34.41%

const smallestAbsent2 = (nums: number[]): number => {
  const uniq = new Set()
  let div = 0

  for (let i = 0; i < nums.length; i++) {
    uniq.add(nums[i])
    div += nums[i]
  }

  div /= nums.length

  for (let i = div > 0 ? Math.trunc(div) + 1 : 1; true; i++) {
    if (!uniq.has(i)) return i
  }
};
