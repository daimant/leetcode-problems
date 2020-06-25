/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
const xorOperation = function(n, start) {
  const arr = new Array(n);

  for (let i = 0; i < n; i++) {
    arr.push(start + 2 * i);
  }

  return arr.reduce((acc, curr) => acc ^ curr);
};
