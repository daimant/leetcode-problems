/**
 * @param {number[]} nums
 * @return {number}
 */
// fast solution
const minMoves = nums => {
  const min = Math.min(...nums);
  let count = 0;

  for (let num of nums) count += num - min;

  return count;
};

// short solution
const minMoves2 = nums =>
  nums.sort((a, b) => a - b).reduce((acc, curr) => acc + curr - nums[0], 0);
