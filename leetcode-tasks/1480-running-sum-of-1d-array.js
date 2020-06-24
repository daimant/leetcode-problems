/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function(nums) {
  return nums.map((el, i) =>
    i === 0 ? (nums[i] = el) : (nums[i] = el + nums[i - 1])
  );
};
