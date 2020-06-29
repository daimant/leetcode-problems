/**
 * @param {string[][]} paths
 * @return {string}
 */
const destCity = function(paths) {
  const start = new Set([...paths.map(el => el[0])]);

  for (let i = 0; i < paths.length; i++) {
    if (!start.has(paths[i][1])) return paths[i][1];
  }
};
