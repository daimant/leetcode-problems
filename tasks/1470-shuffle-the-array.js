/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = function(nums, n) {
  const arr = [];

  for (let i = 0; i < n; i++) {
    arr.push([]);
  }

  for (let i = 0; i < nums.length; i++) {
    arr[i % n].push(nums[i]);
  }

  return arr.reduce((acc, curr) => acc.concat(curr));
};
