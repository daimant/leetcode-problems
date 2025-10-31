/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function(L, R) {
  let set = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
  let countPrime = 0;

  for (let i = L; i <= R; i++) {
    if (set.has(i.toString(2).replace(/0/g, "").length)) countPrime++;
  }

  return countPrime;
};
