// Accepted 897 / 897 testcases passed Sergey Pomortsev submitted at Feb 23, 2026 12:05
// Solution Runtime 1 ms Beats 66.67% Analyze Complexity Memory 57.56 MB Beats 91.67%

function canAliceWin(nums: number[]): boolean {
  const single = nums.filter(el => el < 10).reduce((acc, curr) => acc + curr, 0)
  const multiple = nums.filter(el => el >= 10).reduce((acc, curr) => acc + curr, 0)
  return single !== multiple
};

// other solution
// Accepted 897 / 897 testcases passed Sergey Pomortsev submitted at Feb 23, 2026 12:07
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 58.12 MB Beats 50.00%

function canAliceWin(nums: number[]): boolean {
  const sum = nums.reduce((acc, curr) => acc + curr, 0)
  const single = nums.filter(el => el >= 10).reduce((acc, curr) => acc + curr, 0)
  return single !== sum - single
};