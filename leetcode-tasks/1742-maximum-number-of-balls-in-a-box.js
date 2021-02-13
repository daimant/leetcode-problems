/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
const countBalls = function(lowLimit, highLimit) {
  const collection = [];
  let max = -Infinity;

  for (let i = lowLimit; i <= highLimit; i++) {
    const curr = [...(i + "")].reduce((curr, acc) => +curr + +acc);

    if (!collection[curr]) collection[curr] = 1;
    else collection[curr]++;

    if (collection[curr] > max) max = collection[curr];
  }

  return max;
};
