// Accepted 121 / 121 testcases passed Sergey Pomortsev submitted at Mar 30, 2026 10:46
// Solution Runtime 0 ms Beats 100.00% Memory 56.18 MB Beats 14.29%

function countHillValley(nums: number[]): number {
  let count = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    } else if ((nums[i] < nums[i - 1] && nums[i] < nums[i + 1] || nums[i] > nums[i - 1] && nums[i] > nums[i + 1])) count++;
  }

  return count;
};