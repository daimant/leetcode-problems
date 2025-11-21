// Accepted 989 / 989 testcases passed Sergey Pomortsev submitted at Nov 21, 2025 09:04
// Solution Runtime 1 ms Beats 99.39% Analyze Complexity Memory 58.82 MB Beats 78.18%

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