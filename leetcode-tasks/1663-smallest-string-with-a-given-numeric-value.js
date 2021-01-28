/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getSmallestString = function(n, k) {
  let arr = new Array(n).fill(1);
  k -= n;

  for (let i = 0; k && i < n; i++) {
    if (k >= 25) {
      arr[i] += 25;
      k -= 25;
    } else {
      arr[i] += k;
      k = 0;
    }
  }

  return arr
    .reverse()
    .map(el => String.fromCharCode(96 + el))
    .join("");
};
