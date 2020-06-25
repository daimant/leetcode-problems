/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
const groupThePeople = function(groupSizes) {
  const result = [];
  const table = {};
  for (let i = 0; i < groupSizes.length; i++) {
    if (!table[groupSizes[i]]) table[groupSizes[i]] = [];

    table[groupSizes[i]].push(i);

    if (table[groupSizes[i]].length === groupSizes[i]) {
      result.push(table[groupSizes[i]]);
      table[groupSizes[i]] = [];
    }
  }

  return result;
};
