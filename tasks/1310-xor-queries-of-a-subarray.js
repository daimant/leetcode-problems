/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
const xorQueries = function(arr, queries) {
  const result = [];

  for (let i = 0; i < queries.length; i++) {
    const currQuerie = queries[i];
    let currValue = arr[currQuerie[0]];

    for (let j = currQuerie[0] + 1; j <= currQuerie[1]; j++) {
      currValue = currValue ^ arr[j];
    }

    result[i] = currValue;
  }

  return result;
};
