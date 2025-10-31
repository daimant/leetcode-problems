/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
  if (!nums.length) return 0;
  let balance = 0,
    maxBalance = 0;
  const table = new Map([[0, [0]]]);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) balance++;
    else balance--;

    if (table.has(balance)) table.set(balance, [table.get(balance)[0], i + 1]);
    else table.set(balance, [i + 1]);
  }

  for (let arr of table.values()) {
    let curr = arr.length > 1 ? arr[1] - arr[0] : 0;
    if (curr > maxBalance) maxBalance = curr;
  }

  return maxBalance;
};
