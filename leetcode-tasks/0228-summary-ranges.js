/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = function(nums) {
  const { length: len } = nums;
  const result = [];

  for (let i = 0; i < len; i++) {
    if (nums[i] === nums[i + 1] - 1) {
      for (let j = i + 1; j < len; j++) {
        if (nums[j] !== nums[j + 1] - 1) {
          result.push(`${nums[i]}->${nums[j]}`);
          i = j;
          break;
        }
      }
    } else result.push(`${nums[i]}`);
  }

  return result;
};
