// Accepted 44 / 44 testcases passed Sergey Pomortsev submitted at Jan 29, 2026 22:45
// Solution Runtime 26 ms Beats 71.62% Analyze Complexity Memory 85.44 MB Beats 98.65%

function pivotArray(nums: number[], pivot: number): number[] {
  return [...nums.filter(el => el < pivot), ...nums.filter(el => el === pivot), ...nums.filter(el => el > pivot)]
};