/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const findKthPositive = function(arr, k) {
  arr = new Set(arr);
  let count = 0;

  for (let i = 1; count < k; i++) {
    if (!arr.has(i)) count++;
    if (count === k) return i;
  }
};
