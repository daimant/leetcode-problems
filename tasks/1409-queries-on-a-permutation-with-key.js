/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
const processQueries = function(queries, m) {
  const p = [];
  const result = [];

  for (let i = 1; i <= m; i++) p.push(i);

  outer: for (let i = 0; i < queries.length; i++) {
    const currValue = queries[i];

    for (let j = 0; j < p.length; j++) {
      if (p[j] === currValue) {
        result.push(j);
        p.unshift(...p.splice(j, 1));
        continue outer;
      }
    }
  }

  return result;
};
