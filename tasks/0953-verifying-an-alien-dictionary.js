/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  const ufo = {};

  for (let i = 0; i < order.length; i++) ufo[order[i]] = i;

  for (let i = 0; i < words.length - 1; i++) {
    const curr = words[i],
      next = words[i + 1];
    for (let j = 0; j < curr.length; j++) {
      if (ufo[curr[j]] === ufo[next[j]]) continue;
      else if (ufo[curr[j]] < ufo[next[j]]) break;
      else if (ufo[curr[j]] > ufo[next[j]] || (curr[j] && !next[j]))
        return false;
    }
  }

  return true;
};
