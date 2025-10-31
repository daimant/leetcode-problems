/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = function(x, n) {
  if (!n) return 1;

  const module = Math.abs(n);
  let result = x;

  for (let i = 1; i < module; i++) {
    const temp = result;
    result = result * x;

    if (temp === result) break;
  }

  return n < 0 ? 1 / result : result;
};
