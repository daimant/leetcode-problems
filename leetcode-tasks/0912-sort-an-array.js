// sort choice O(n*n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  const arr = [];

  while (nums.length) {
    let min = 0;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] < nums[min]) min = i;
    }
    arr.push(nums.splice(min, 1));
  }

  return arr;
};
