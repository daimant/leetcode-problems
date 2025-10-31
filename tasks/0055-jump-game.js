/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let must = [0],
    was = new Set();
  const last = nums.length - 1;

  while (must.length) {
    const position = must.pop();
    let jump = position + nums[position];

    while (nums[jump] !== 0 && jump < last) {
      jump += nums[jump];
    }

    for (let i = position; i < jump; i++) {
      if (!was.has(i) && nums[i] !== 0) {
        must.push(i);
        was.add(i);
      }
    }

    if (was.has(last) || jump >= last) return true;
  }

  return false;
};
