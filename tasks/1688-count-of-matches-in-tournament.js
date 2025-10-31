/**
 * @param {number} n
 * @return {number}
 */
const numberOfMatches = function(n) {
  let count = 0;

  while (n > 1) {
    const currMatches = Math.trunc(n / 2);
    n = currMatches + Math.ceil(n % 2);
    count += currMatches;
  }

  return count;
};
