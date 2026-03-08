// Accepted 781 / 781 testcases passed Sergey Pomortsev submitted at Mar 08, 2026 11:57
// Solution Runtime 0 ms Beats 100.00% Memory 57.82 MB Beats 81.82% Code

function minimumOperations(nums: number[]): number {
  const uniq = new Set<number>();

  for (let i = nums.length - 1; i >= 0; i--) {
    if (!uniq.has(nums[i])) uniq.add(nums[i]);
    else return Math.ceil((i + 1) / 3);
  }

  return 0;
};