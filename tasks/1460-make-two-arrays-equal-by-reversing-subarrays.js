// Accepted
// Runtime 84 ms Beats 6.11%
// Memory 36.13 MB Beats 100.00%

/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
const canBeEqual = (target, arr) =>
  target.sort().toString() === arr.sort().toString();
