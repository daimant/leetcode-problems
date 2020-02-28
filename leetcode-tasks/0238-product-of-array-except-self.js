/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  return nums.map((el, i, arr) => {
    el = arr.slice();
    el.splice(i, 1);
    return el.reduce((prev, curr) => (curr *= prev));
  });
};

// var productExceptSelf = (nums) => nums.map((el, i, arr) => {el = arr.slice(); el.splice(i,1); return el.reduce((prev, curr) => curr *= prev)});
