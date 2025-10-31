/**
 * @param {number[]} sat
 * @return {number}
 */
const maxSatisfaction = sat => {
  sat.sort((a, b) => a - b);
  let max = 0;

  while (sat.length) {
    const curr = sat.reduce((acc, curr, i) => acc + curr * (i + 1), 0);
    if (curr > max) max = curr;

    sat.shift();
  }

  return max;
};
