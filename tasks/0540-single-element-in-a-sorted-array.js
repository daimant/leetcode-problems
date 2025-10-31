/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  let start = 0,
    end = nums.length - 1;

  if (start === end) return nums[start];

  while (start < end) {
    let mid = start + Math.trunc((end - start) / 2),
      midSecond = mid;

    if (nums[mid] === nums[mid + 1]) midSecond++;
    else if (nums[mid] === nums[mid - 1]) mid--;
    else return nums[mid];

    if ((end - midSecond) % 2 !== 0) start = midSecond + 1;
    else if ((mid - start) % 2 !== 0) end = mid - 1;

    if (end === start) return nums[start];
  }
};
