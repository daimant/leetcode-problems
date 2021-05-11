/**
 * @param {number[][]} logs
 * @return {number}
 */
const maximumPopulation = logs => {
  const map = new Map();
  let minYear = Infinity;
  let maxRep = -Infinity;

  for (let log of logs) {
    for (let i = log[0]; i < log[1]; i++) {
      const currVal = (map.has(i)) ? map.get(i) + 1 : 1;
      map.set(i, currVal);

      if (maxRep < currVal) {
        maxRep = currVal;
        minYear = i;
      } else if (maxRep === currVal && minYear > i)
        minYear = i;
    }
  }

  return minYear;
};
