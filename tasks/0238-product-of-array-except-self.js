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

// Accepted
// Runtime 74 ms Beats 94.99% of users with JavaScript
// Memory 60.54 MB Beats 59.40% of users with JavaScript

const productExceptSelf3 = (nums) => {
  let countZero = 0
  let product = 1

  for (let i = 0; i < nums.length && countZero < 2; i++) {
    if (nums[i] === 0) countZero++
    else product *= nums[i]
  }

  if (countZero >= 2) return nums.map(() => 0)
  else if (countZero === 1) return nums.map(el => (el === 0) ? product : 0)
  else return nums.map(el => product / el)
}
