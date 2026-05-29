// Accepted 696 / 696 testcases passed Sergey Pomortsev submitted at Mar 24, 2026 17:15
// Solution Runtime 50 ms Beats 87.69% Memory 58.13 MB Beats 78.46%

function constructTransformedArray(nums: number[]): number[] {
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    const currIdx = (nums[i] + i) % nums.length;
    arr.push(nums[currIdx < 0 ? currIdx + nums.length : currIdx]);
  }

  return arr;
};