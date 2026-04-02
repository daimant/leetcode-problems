// Accepted 211 / 211 testcases passed Sergey Pomortsev submitted at Apr 01, 2026 22:59
// Solution Runtime 10 ms Beats 100.00% Memory 55.93 MB Beats 58.33%

function countQuadruplets(nums: number[]): number {
  let count = 0;

  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      for (let k = j + 1; k < nums.length - 1; k++) {
        for (let h = k + 1; h < nums.length; h++) {
          if (nums[i] + nums[j] + nums[k] === nums[h]) count++;
        }
      }
    }
  }

  return count;
};