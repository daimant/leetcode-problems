// it worked in 2020, but now it doesn’t

var productExceptSelf = function(nums) {
  return nums.map((el, i, arr) => {
    el = arr.slice();
    el.splice(i, 1);
    return el.reduce((prev, curr) => (curr *= prev));
  });
}

// wrong solution

const productExceptSelf2 = (nums) => {
  const product = nums.reduce((acc, curr) => acc * curr, 0)
  return nums.map(el => product / el)
}
