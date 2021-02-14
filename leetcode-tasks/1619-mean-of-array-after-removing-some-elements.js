/**
 * @param {number[]} arr
 * @return {number}
 */
const trimMean = arr => {
  arr.sort((a, b) => a - b);

  for (let i = 0, { length: len } = arr; i < len / 20; i++) {
    arr.pop();
    arr.shift();
  }

  return arr.reduce((acc, curr) => acc + curr) / arr.length;
};
