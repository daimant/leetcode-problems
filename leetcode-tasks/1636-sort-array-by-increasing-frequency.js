// Accepted
// Runtime 65 ms Beats 68.39%
// Memory 52.07 MB Beats 52.26%

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
