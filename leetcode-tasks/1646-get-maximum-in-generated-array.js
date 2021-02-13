/**
 * @param {number} n
 * @return {number}
 */
const getMaximumGenerated = function(n) {
  const result = [];

  for (let i = 0; i <= n; i++) {
    result.push(
      i < 2
        ? i
        : i % 2
        ? result[Math.trunc(i / 2)] + result[Math.ceil(i / 2)]
        : result[i / 2]
    );
  }

  return Math.max(...result);
};
