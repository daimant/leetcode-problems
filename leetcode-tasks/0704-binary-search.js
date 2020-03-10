/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let low = 0;
  let high = nums.length;

  while (low <= high) {
    let middle = Math.trunc((low + high) / 2);
    let guess = nums[middle];

    if (guess === target) {
      return middle;
    } else if (guess > target) {
      high = middle - 1;
    } else low = middle + 1;
  }

  return -1;
};
