/**
 * @param {number[]} nums
 * @return {number}
 */
const specialArray = function(nums) {
  const { length: len } = nums;

  for (let i = 1; i <= len; i++) {
    let count = 0;

    for (let j = 0; j < len; j++) {
      if (nums[j] >= i) count++;
    }

    if (count === i) return i;
  }

  return -1;
};
