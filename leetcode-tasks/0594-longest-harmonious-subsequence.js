/**
 * @param {number[]} nums
 * @return {number}
 */
const findLHS = function(nums) {
  let maxLength = 0;
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) map.set(nums[i], map.get(nums[i]) + 1);
    if (!map.has(nums[i])) map.set(nums[i], 1);
  }

  for (let i of map) {
    if (map.get(i[0] + 1) + i[1] > maxLength) {
      maxLength = map.get(i[0] + 1) + i[1];
    }
  }

  return maxLength;
};
