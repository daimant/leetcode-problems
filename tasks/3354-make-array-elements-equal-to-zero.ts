// Accepted 584 / 584 testcases passed Sergey Pomortsev submitted at Mar 26, 2026 15:44
// Solution Runtime 41 ms Beats 96.55% Memory 55.01 MB Beats 86.21%

function countValidSelections(nums: number[]): number {
  let sumRight = nums.reduce((acc, curr) => acc + curr, 0);
  let sumLeft = 0
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i) {
      sumRight -= nums[i - 1];
      sumLeft += nums[i - 1];
    }

    if (!nums[i] && sumRight === sumLeft) result += 2;
    else if (!nums[i] && (sumRight === sumLeft - 1 || sumRight === sumLeft + 1)) result++;
  }

  return result;
};