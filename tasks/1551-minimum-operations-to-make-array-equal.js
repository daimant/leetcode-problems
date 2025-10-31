/**
 * @param {number} n
 * @return {number}
 */
const minOperations = n => {
  let result = 0;

  for (let i = 0; i < n / 2; i++)
    result += n - (i * 2 + 1);

  return result;
};