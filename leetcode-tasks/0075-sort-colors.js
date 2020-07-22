/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function(nums) {
  // its incorrect solution
  let zero = 0;
  let one = 0;
  let two = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) zero++;
    else if (nums[i] === 1) one++;
    else two++;
  }

  nums.splice(
    0,
    zero + one + two,
    ...new Array(zero).fill(0),
    ...new Array(one).fill(1),
    ...new Array(two).fill(2)
  );
};
