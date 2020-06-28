/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function(nums) {
  let first = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];

    if (curr >= first) {
      second = first;
      first = curr;
    } else if (curr < first && curr > second) second = curr;
  }

  return (first - 1) * (second - 1);
};
