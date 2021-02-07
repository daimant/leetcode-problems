/**
 * @param {number[]} nums
 * @return {boolean}
 */
const check = function(nums) {
  let min = nums.lastIndexOf(Math.min(...nums));

  for (let i = min; i >= 0; i--) {
    if (nums[i] === nums[i - 1]) min = i - 1;
    else break;
  }

  const startArr = [...nums.slice(min), ...nums.slice(0, min)];

  for (let i = 0; i < startArr.length; i++) {
    if (startArr[i] > startArr[i + 1]) return false;
  }

  return true;
};
