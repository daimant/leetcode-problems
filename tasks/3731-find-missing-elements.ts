// Accepted 989 / 989 testcases passed Sergey Pomortsev submitted at Nov 09, 2025 16:36
// Solution Runtime 2 ms Beats 90.30% Analyze Complexity Memory 59.82 MB Beats 24.85%

function findMissingElements(nums: number[]): number[] {
  const result = [];
  const set = new Set(nums);
  let min = 101;
  let max = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) max = nums[i];
    if (nums[i] < min) min = nums[i];
  }

  while (min < max) {
    if (!set.has(min)) result.push(min);
    min++;
  }

  return result;
}