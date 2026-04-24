// Accepted 2880 / 2880 testcases passed Sergey Pomortsev submitted at Mar 31, 2026 18:35
// Solution Runtime 2 ms Beats 87.50% Memory 58.24 MB Beats 100.00%

function alternatingSubarray(nums: number[]): number {
  let result = -1;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1] - 1) {
      let curr = 2;

      for (let j = i + 1; j < nums.length - 1; j++) {
        if ((nums[j - 1] - 1 === nums[j] && nums[j] === nums[j + 1] - 1) || (nums[j - 1] + 1 === nums[j] && nums[j] === nums[j + 1] + 1)) curr++;
        else break;
      }

      if (result < curr) result = curr;
    }

  }

  return result;
};