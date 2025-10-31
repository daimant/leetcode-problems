/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
const findKthBit = function(n, k) {
  let s = "0";

  for (let i = 2; i <= n; i++) {
    s +=
      1 +
      [...s]
        .reverse()
        .map(el => (el === "1" ? 0 : 1))
        .join("");
  }

  return s[--k];
};
