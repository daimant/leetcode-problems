/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  nums.sort();

  for (let i = 0, len = nums.length; i < len; i++) {
    if (
      (i === 0 && nums[i] === nums[i + 1]) ||
      (i > 0 && i < len - 1 && nums[i] === nums[i + 1]) ||
      (i > 0 && i < len - 1 && nums[i] === nums[i - 1]) ||
      i === len - 1
    )
      return nums[i];
  }
};
