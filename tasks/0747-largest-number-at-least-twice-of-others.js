/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  let maxValueIndex;
  let maxValue = -Infinity;
  let secondMaxValue = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maxValue) {
      maxValueIndex = i;
      secondMaxValue = maxValue;
      maxValue = nums[i];
    }

    if (nums[i] > secondMaxValue && nums[i] < maxValue)
      secondMaxValue = nums[i];
  }

  return maxValue >= secondMaxValue * 2 ? maxValueIndex : -1;
};
