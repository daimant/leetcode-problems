/**
 * @param {number[]} nums
 * @return {number}
 */
const maxAscendingSum = nums => {
  let currSub = nums[0];
  let maxSub = currSub;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) currSub = nums[i];
    else currSub += nums[i];

    if (currSub > maxSub) maxSub = currSub;
  }

  return maxSub;
};
