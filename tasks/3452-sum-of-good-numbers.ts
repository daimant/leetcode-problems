// Accepted 803 / 803 testcases passed Sergey Pomortsev submitted at Mar 19, 2026 22:25
// Solution Runtime 1 ms Beats 54.55% Memory 57.54 MB Beats 72.73%

const sumOfGoodNumbers = (nums: number[], k: number): number => {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > (nums[i - k] || 0) && nums[i] > (nums[i + k] || 0)) sum = sum + nums[i];
  }

  return sum;
}