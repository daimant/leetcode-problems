/**
 * @param {number[]} nums
 * @return {number[]}
 */
const frequencySort = nums => {
  const freq = new Map();

  for (let i of nums) {
    if (freq.has(i)) freq.set(i, freq.get(i) + 1);
    else freq.set(i, 1);
  }

  return nums.sort((a, b) =>
    freq.get(a) === freq.get(b) ? b - a : freq.get(a) - freq.get(b)
  );
};
