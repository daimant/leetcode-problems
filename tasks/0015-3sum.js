/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
  const collection = new Map();
  let table = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (!collection.has(nums[i])) collection.set(nums[i], 1);
    else if (collection.get(nums[i]) < 4)
      collection.set(nums[i], collection.get(nums[i]) + 1);
    else {
      nums.splice(i, 1);
      i--;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    outer: for (let j = i + 1; j < nums.length; j++) {
      const first = nums[i];
      const second = nums[j];
      const third = 0 - (first + second);

      if (!collection.has(third)) continue;

      const curr = new Map([[first, 1]]);
      const arr = [first, second, third];

      if (!curr.has(second)) curr.set(second, 1);
      else curr.set(second, curr.get(second) + 1);

      if (!curr.has(third)) curr.set(third, 1);
      else curr.set(third, curr.get(third) + 1);

      for (let el of curr.keys()) {
        if (collection.get(el) < curr.get(el)) continue outer;
      }

      const str = arr.sort().toString();
      if (!table.has[str]) table.set(str, arr);
    }
  }

  return [...table.values()];
};
