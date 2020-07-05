/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
  const variants = new Set(nums.map((el, i) => `${i}`));

  while (true) {
    let change = false;

    for (let i = 0; i < nums.length; i++) {
      for (let el of variants) {
        const curr = i + el;

        if (!el.includes(i) && !variants.has(curr)) {
          variants.add(curr);
          change = true;
        }
      }
    }

    if (!change) break;
  }

  return [...variants]
    .filter(el => el.length === nums.length)
    .map(el => [...el].map(el => nums[el]));
};
